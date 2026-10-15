'use client'

import React, { useEffect, useRef, useState } from 'react'

import {
  createActivity,
  deleteActivity,
  listActivities,
  updateActivity,
} from './actions'
import {
  Activity,
  ActivityInput,
  COLORS,
  ColorName,
  DAYS,
  dayInfo,
  formatMinutes,
} from './shared'

const HOUR = 48 // px per hour
const SNAP = 15 // minutes
const GUTTER = 56 // px, hour labels column
const COL_MIN = 132 // px, minimum day column width
const REFRESH_MS = 30_000

type Draft = ActivityInput & { id?: string }

type Ghost = { id?: string; dayIdx: number; start: number; end: number }

type Drag = {
  mode: 'create' | 'move' | 'resize'
  pointerId: number
  mouse: boolean
  x0: number
  y0: number
  moved: boolean
  id?: string
  // create: minute where the drag started; move: pointer offset into the
  // activity; resize: activity start.
  anchor: number
  dayIdx: number
  duration: number
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v))
const snap = (m: number) => Math.round(m / SNAP) * SNAP
const isTemp = (id: string) => id.startsWith('temp-')

function toTimeInput(m: number) {
  return formatMinutes(m === 1440 ? 0 : m)
}

function fromTimeInput(value: string, isEnd: boolean) {
  const [h, m] = value.split(':').map(Number)
  const minutes = (h || 0) * 60 + (m || 0)
  return isEnd && minutes === 0 ? 1440 : minutes
}

function newDraft(date: string, start: number, end: number, allDay = false) {
  return {
    title: '',
    date,
    start_min: allDay ? 0 : start,
    end_min: allDay ? 1440 : end,
    all_day: allDay,
    location: '',
    notes: '',
    color: 'blue' as ColorName,
  }
}

// Places overlapping activities side by side, like Calendar.app.
function layoutDay(items: Activity[]) {
  const sorted = [...items].sort(
    (a, b) => a.start_min - b.start_min || b.end_min - a.end_min,
  )
  const result = new Map<string, { col: number; cols: number }>()
  let cluster: { id: string; col: number }[] = []
  let colEnds: number[] = []
  let clusterEnd = -1
  const flush = () => {
    cluster.forEach(({ id, col }) =>
      result.set(id, { col, cols: colEnds.length }),
    )
    cluster = []
    colEnds = []
  }
  for (const a of sorted) {
    if (a.start_min >= clusterEnd) {
      flush()
      clusterEnd = -1
    }
    let col = colEnds.findIndex((end) => end <= a.start_min)
    if (col === -1) {
      col = colEnds.length
      colEnds.push(a.end_min)
    } else {
      colEnds[col] = a.end_min
    }
    cluster.push({ id: a.id, col })
    clusterEnd = Math.max(clusterEnd, a.end_min)
  }
  flush()
  return result
}

export default function Calendar({
  initialActivities,
}: {
  initialActivities: Activity[]
}) {
  const [activities, setActivities] = useState(initialActivities)
  const [ghost, setGhostState] = useState<Ghost | null>(null)
  const [draft, setDraft] = useState<Draft | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [askDelete, setAskDelete] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<Drag | null>(null)
  const ghostRef = useRef<Ghost | null>(null)
  const draftRef = useRef<Draft | null>(null)
  const pendingRef = useRef(0)
  // Bumped when a refresh starts or a local mutation begins so in-flight
  // refreshes cannot apply a snapshot that predates newer local state.
  const refreshIdRef = useRef(0)
  // Per-activity counter so only the latest in-flight save may commit or roll back.
  const saveGenRef = useRef(new Map<string, number>())

  draftRef.current = draft

  const setGhost = (g: Ghost | null) => {
    ghostRef.current = g
    setGhostState(g)
  }

  const closeEditor = () => {
    setDraft(null)
    setAskDelete(false)
  }

  const flashError = (message: string) => {
    setError(message)
    setTimeout(() => setError(null), 5000)
  }

  // Start the day view at 7:00.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 7 * HOUR - 12
  }, [])

  // Pick up changes made by other people.
  useEffect(() => {
    const refresh = async () => {
      if (dragRef.current || draftRef.current || pendingRef.current > 0) return
      const id = ++refreshIdRef.current
      try {
        const fresh = await listActivities()
        if (id !== refreshIdRef.current) return
        if (!dragRef.current && !draftRef.current && pendingRef.current === 0)
          setActivities(fresh)
      } catch {
        // Keep showing what we have; the next refresh may succeed.
      }
    }
    const interval = setInterval(refresh, REFRESH_MS)
    window.addEventListener('focus', refresh)
    return () => {
      clearInterval(interval)
      window.removeEventListener('focus', refresh)
    }
  }, [])

  async function save(next: Draft) {
    const { id, ...input } = next
    pendingRef.current++
    refreshIdRef.current++
    try {
      if (id) {
        const previous = activities.find((a) => a.id === id)
        const gen = (saveGenRef.current.get(id) ?? 0) + 1
        saveGenRef.current.set(id, gen)
        setActivities((list) =>
          list.map((a) => (a.id === id ? { ...a, ...input } : a)),
        )
        try {
          const row = await updateActivity(id, input)
          if (saveGenRef.current.get(id) === gen)
            setActivities((list) => list.map((a) => (a.id === id ? row : a)))
        } catch {
          if (saveGenRef.current.get(id) === gen) {
            if (previous)
              setActivities((list) =>
                list.map((a) => (a.id === id ? previous : a)),
              )
            flashError('Could not save the change.')
          }
        }
      } else {
        const tempId = `temp-${Date.now()}`
        setActivities((list) => [...list, { ...input, id: tempId }])
        try {
          const row = await createActivity(input)
          setActivities((list) => list.map((a) => (a.id === tempId ? row : a)))
        } catch {
          setActivities((list) => list.filter((a) => a.id !== tempId))
          flashError('Could not add the activity.')
        }
      }
    } finally {
      pendingRef.current--
    }
  }

  async function remove(id: string) {
    const previous = activities.find((a) => a.id === id)
    if (!previous) return
    pendingRef.current++
    refreshIdRef.current++
    saveGenRef.current.set(id, (saveGenRef.current.get(id) ?? 0) + 1)
    setActivities((list) => list.filter((a) => a.id !== id))
    setSelectedId(null)
    try {
      await deleteActivity(id)
    } catch {
      setActivities((list) => [...list, previous])
      flashError('Could not delete the activity.')
    } finally {
      pendingRef.current--
    }
  }

  // Delete the selected activity with Backspace/Delete.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (draft || !selectedId || isTemp(selectedId)) return
      const target = e.target as HTMLElement
      if (target.closest('input, textarea, select')) return
      if (e.key === 'Backspace' || e.key === 'Delete') {
        // Ask inside the page: window.confirm() can be suppressed by the
        // browser ("prevent additional dialogs") and silently return false.
        const activity = activities.find((a) => a.id === selectedId)
        if (activity) {
          e.preventDefault()
          setAskDelete(true)
          setDraft({ ...activity })
        }
      } else if (e.key === 'Escape') {
        setSelectedId(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  function pointAt(e: { clientX: number; clientY: number }) {
    const rect = gridRef.current!.getBoundingClientRect()
    const colWidth = rect.width / DAYS.length
    return {
      dayIdx: clamp(
        Math.floor((e.clientX - rect.left) / colWidth),
        0,
        DAYS.length - 1,
      ),
      minute: clamp(((e.clientY - rect.top) / HOUR) * 60, 0, 1440),
    }
  }

  function startDrag(
    e: React.PointerEvent,
    drag: Omit<Drag, 'pointerId' | 'mouse' | 'x0' | 'y0' | 'moved'>,
  ) {
    const mouse = e.pointerType === 'mouse'
    dragRef.current = {
      ...drag,
      pointerId: e.pointerId,
      mouse,
      x0: e.clientX,
      y0: e.clientY,
      moved: false,
    }
    // On touch screens, let the browser scroll; activities open on tap.
    if (mouse) {
      gridRef.current!.setPointerCapture(e.pointerId)
      e.preventDefault()
    }
  }

  function onGridPointerDown(e: React.PointerEvent) {
    if (e.button !== 0) return
    const { dayIdx, minute } = pointAt(e)
    setSelectedId(null)
    startDrag(e, {
      mode: 'create',
      anchor: clamp(Math.floor(minute / SNAP) * SNAP, 0, 1440 - SNAP),
      dayIdx,
      duration: 0,
    })
  }

  function onActivityPointerDown(
    e: React.PointerEvent,
    a: Activity,
    resize: boolean,
  ) {
    if (e.button !== 0 || isTemp(a.id)) return
    e.stopPropagation()
    const { minute } = pointAt(e)
    startDrag(e, {
      mode: resize ? 'resize' : 'move',
      id: a.id,
      anchor: resize ? a.start_min : minute - a.start_min,
      dayIdx: DAYS.indexOf(a.date),
      duration: a.end_min - a.start_min,
    })
  }

  function onGridPointerMove(e: React.PointerEvent) {
    const d = dragRef.current
    if (!d || d.pointerId !== e.pointerId || !d.mouse) return
    if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 4) return
    d.moved = true
    const { dayIdx, minute } = pointAt(e)
    if (d.mode === 'create') {
      const m = snap(minute)
      let start = d.anchor
      let end = d.anchor + SNAP
      if (m > d.anchor + SNAP) end = m
      else if (m < d.anchor) start = m
      setGhost({ dayIdx: d.dayIdx, start, end })
    } else if (d.mode === 'move') {
      const start = clamp(snap(minute - d.anchor), 0, 1440 - d.duration)
      setGhost({ id: d.id, dayIdx, start, end: start + d.duration })
    } else {
      const end = clamp(snap(minute), d.anchor + SNAP, 1440)
      setGhost({ id: d.id, dayIdx: d.dayIdx, start: d.anchor, end })
    }
  }

  function onGridPointerUp(e: React.PointerEvent) {
    const d = dragRef.current
    if (!d || d.pointerId !== e.pointerId) return
    const g = ghostRef.current
    dragRef.current = null
    setGhost(null)

    if (d.mode === 'create') {
      if (d.moved && g) {
        setDraft(newDraft(DAYS[g.dayIdx], g.start, g.end))
      } else if (!d.mouse) {
        setDraft(
          newDraft(DAYS[d.dayIdx], d.anchor, Math.min(d.anchor + 60, 1440)),
        )
      }
      return
    }

    const activity = activities.find((a) => a.id === d.id)
    if (!activity) return
    if (!d.moved || !g) {
      setSelectedId(activity.id)
      setDraft({ ...activity })
    } else if (
      DAYS[g.dayIdx] !== activity.date ||
      g.start !== activity.start_min ||
      g.end !== activity.end_min
    ) {
      setSelectedId(activity.id)
      save({
        ...activity,
        date: DAYS[g.dayIdx],
        start_min: g.start,
        end_min: g.end,
      })
    }
  }

  function onGridPointerCancel() {
    dragRef.current = null
    setGhost(null)
  }

  function onGridDoubleClick(e: React.MouseEvent) {
    const { dayIdx, minute } = pointAt(e)
    const start = clamp(Math.floor(minute / 30) * 30, 0, 1440 - 60)
    setDraft(newDraft(DAYS[dayIdx], start, start + 60))
  }

  const timed = activities.filter((a) => !a.all_day)
  const layouts = new Map<string, { col: number; cols: number }>()
  DAYS.forEach((day) =>
    layoutDay(timed.filter((a) => a.date === day)).forEach((v, k) =>
      layouts.set(k, v),
    ),
  )
  const width = `${100 / DAYS.length}%`
  const columns = `repeat(${DAYS.length}, minmax(0, 1fr))`

  return (
    <div className='font-sans'>
      <div className='mb-3 flex flex-wrap items-center justify-between gap-3'>
        <div className='text-sm text-gray-600'>
          Drag on the calendar or double-click to add an activity. Drag an
          activity to move it, or its bottom edge to change its length. Times
          are in Encarnación (UTC−3).
        </div>
        <button
          type='button'
          className='rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-700'
          onClick={() => setDraft(newDraft(DAYS[0], 9 * 60, 10 * 60))}
        >
          + New activity
        </button>
      </div>

      {error && (
        <div className='mb-3 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800'>
          {error}
        </div>
      )}

      <div
        ref={scrollRef}
        className='overflow-auto rounded-lg border border-gray-300 bg-white shadow-sm'
        style={{ height: 'max(480px, calc(100vh - 260px))' }}
      >
        <div style={{ minWidth: GUTTER + DAYS.length * COL_MIN }}>
          {/* Day headers and all-day activities stay visible while scrolling. */}
          <div className='sticky top-0 z-20 border-b border-gray-300 bg-white'>
            <div className='flex'>
              <div
                className='sticky left-0 z-30 shrink-0 bg-white'
                style={{ width: GUTTER }}
              />
              <div
                className='grid flex-1'
                style={{ gridTemplateColumns: columns }}
              >
                {DAYS.map((day) => {
                  const info = dayInfo(day)
                  return (
                    <div
                      key={day}
                      className={`flex items-baseline justify-center gap-1.5 border-l border-gray-200 py-2 text-sm ${
                        info.weekend ? 'text-gray-500' : 'text-gray-800'
                      }`}
                    >
                      <span>{info.weekday}</span>
                      <span className='text-lg font-semibold'>{info.day}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='flex border-t border-gray-200'>
              <div
                className='sticky left-0 z-30 flex shrink-0 items-center justify-end bg-white pr-2 text-[11px] text-gray-500'
                style={{ width: GUTTER }}
              >
                all-day
              </div>
              <div
                className='grid flex-1'
                style={{ gridTemplateColumns: columns }}
              >
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className='flex min-h-[28px] flex-col gap-0.5 border-l border-gray-200 p-0.5'
                    onDoubleClick={() => setDraft(newDraft(day, 0, 1440, true))}
                  >
                    {activities
                      .filter((a) => a.all_day && a.date === day)
                      .map((a) => {
                        const c = COLORS[a.color] ?? COLORS.blue
                        return (
                          <button
                            key={a.id}
                            type='button'
                            disabled={isTemp(a.id)}
                            className='truncate rounded px-1.5 py-0.5 text-left text-xs font-medium'
                            style={{
                              background: selectedId === a.id ? c.border : c.bg,
                              color: selectedId === a.id ? 'white' : c.text,
                            }}
                            onClick={() => {
                              setSelectedId(a.id)
                              setDraft({ ...a })
                            }}
                            onDoubleClick={(e) => e.stopPropagation()}
                          >
                            {a.title}
                          </button>
                        )
                      })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex'>
            {/* Hour labels */}
            <div
              className='sticky left-0 z-10 shrink-0 bg-white'
              style={{ width: GUTTER, height: 24 * HOUR }}
            >
              {Array.from({ length: 23 }, (_, i) => i + 1).map((h) => (
                <div
                  key={h}
                  className='absolute right-2 -translate-y-1/2 text-[11px] text-gray-500'
                  style={{ top: h * HOUR }}
                >
                  {formatMinutes(h * 60)}
                </div>
              ))}
            </div>

            {/* Time grid */}
            <div
              ref={gridRef}
              className='relative flex-1 select-none'
              style={{
                height: 24 * HOUR,
                backgroundImage: `linear-gradient(to bottom, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, transparent ${HOUR / 2}px, #f3f4f6 ${HOUR / 2}px, #f3f4f6 ${HOUR / 2 + 1}px, transparent ${HOUR / 2 + 1}px)`,
                backgroundSize: `100% ${HOUR}px`,
              }}
              onPointerDown={onGridPointerDown}
              onPointerMove={onGridPointerMove}
              onPointerUp={onGridPointerUp}
              onPointerCancel={onGridPointerCancel}
              onDoubleClick={onGridDoubleClick}
            >
              {DAYS.map((day, i) => (
                <div
                  key={day}
                  className='pointer-events-none absolute inset-y-0 border-l border-gray-200'
                  style={{
                    left: `${(i * 100) / DAYS.length}%`,
                    width,
                    background: dayInfo(day).weekend
                      ? 'rgba(15, 23, 42, 0.025)'
                      : undefined,
                  }}
                />
              ))}

              {timed.map((a) => {
                const dayIdx = DAYS.indexOf(a.date)
                const layout = layouts.get(a.id) ?? { col: 0, cols: 1 }
                const left =
                  ((dayIdx + layout.col / layout.cols) * 100) / DAYS.length
                const colWidth = 100 / layout.cols / DAYS.length
                const dragging = ghost?.id === a.id
                return (
                  <ActivityBlock
                    key={a.id}
                    activity={a}
                    selected={selectedId === a.id}
                    faded={dragging || isTemp(a.id)}
                    style={{
                      left: `calc(${left}% + 1px)`,
                      width: `calc(${colWidth}% - 3px)`,
                      top: (a.start_min / 60) * HOUR,
                      height: Math.max(
                        ((a.end_min - a.start_min) / 60) * HOUR - 1,
                        16,
                      ),
                    }}
                    onPointerDown={(e, resize) =>
                      onActivityPointerDown(e, a, resize)
                    }
                  />
                )
              })}

              {ghost && (
                <ActivityBlock
                  activity={
                    activities.find((a) => a.id === ghost.id) ?? {
                      ...newDraft(DAYS[ghost.dayIdx], ghost.start, ghost.end),
                      id: 'ghost',
                      title: 'New activity',
                    }
                  }
                  times={[ghost.start, ghost.end]}
                  selected
                  style={{
                    left: `calc(${(ghost.dayIdx * 100) / DAYS.length}% + 1px)`,
                    width: `calc(${width} - 3px)`,
                    top: (ghost.start / 60) * HOUR,
                    height: ((ghost.end - ghost.start) / 60) * HOUR - 1,
                    zIndex: 5,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {draft && (
        <Editor
          draft={draft}
          askDelete={askDelete}
          onChange={setDraft}
          onCancel={closeEditor}
          onSave={() => {
            save(draft)
            closeEditor()
          }}
          onDelete={
            draft.id
              ? () => {
                  remove(draft.id!)
                  closeEditor()
                }
              : undefined
          }
        />
      )}
    </div>
  )
}

function ActivityBlock({
  activity,
  times,
  selected,
  faded,
  style,
  onPointerDown,
}: {
  activity: Activity
  times?: [number, number]
  selected?: boolean
  faded?: boolean
  style: React.CSSProperties
  onPointerDown?: (e: React.PointerEvent, resize: boolean) => void
}) {
  const c = COLORS[activity.color] ?? COLORS.blue
  const [start, end] = times ?? [activity.start_min, activity.end_min]
  const short = end - start <= 30
  return (
    <div
      className='absolute cursor-default overflow-hidden rounded-md px-1.5 py-0.5 text-xs leading-tight'
      style={{
        ...style,
        background: selected ? c.border : c.bg,
        color: selected ? 'white' : c.text,
        borderLeft: `3px solid ${c.border}`,
        opacity: faded ? 0.4 : 1,
      }}
      onPointerDown={onPointerDown && ((e) => onPointerDown(e, false))}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <div className={short ? 'truncate' : ''}>
        <span className='font-semibold'>
          {activity.title || 'New activity'}
        </span>
        {short && (
          <span className='ml-1 opacity-80'>{formatMinutes(start)}</span>
        )}
      </div>
      {!short && (
        <div className='opacity-80'>
          {formatMinutes(start)} – {formatMinutes(end)}
        </div>
      )}
      {!short && activity.location && (
        <div className='truncate opacity-80'>{activity.location}</div>
      )}
      {onPointerDown && (
        <div
          className='absolute inset-x-0 bottom-0 h-1.5 cursor-ns-resize'
          onPointerDown={(e) => onPointerDown(e, true)}
        />
      )}
    </div>
  )
}

function Editor({
  draft,
  askDelete,
  onChange,
  onCancel,
  onSave,
  onDelete,
}: {
  draft: Draft
  askDelete: boolean
  onChange: (d: Draft) => void
  onCancel: () => void
  onSave: () => void
  onDelete?: () => void
}) {
  const [confirming, setConfirming] = useState(askDelete)
  const set = (patch: Partial<Draft>) => onChange({ ...draft, ...patch })
  const invalid = !draft.all_day && draft.end_min <= draft.start_min
  const field =
    'w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none'

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 font-sans'
      onPointerDown={(e) => e.target === e.currentTarget && onCancel()}
      onKeyDown={(e) => e.key === 'Escape' && onCancel()}
    >
      <form
        className='w-full max-w-md rounded-xl bg-white p-5 shadow-2xl'
        onSubmit={(e) => {
          e.preventDefault()
          if (!invalid) onSave()
        }}
      >
        <input
          autoFocus
          className='mb-4 w-full border-b border-gray-200 pb-1 text-lg font-semibold focus:border-blue-500 focus:outline-none'
          placeholder='New activity'
          value={draft.title}
          maxLength={200}
          onChange={(e) => set({ title: e.target.value })}
        />

        <div className='mb-3 grid grid-cols-[72px_1fr] items-center gap-x-3 gap-y-3 text-sm'>
          <label className='text-gray-500' htmlFor='activity-date'>
            Date
          </label>
          <select
            id='activity-date'
            className={field}
            value={draft.date}
            onChange={(e) => set({ date: e.target.value })}
          >
            {DAYS.map((day) => {
              const info = dayInfo(day)
              return (
                <option key={day} value={day}>
                  {info.weekday}, November {info.day}
                </option>
              )
            })}
          </select>

          <span className='text-gray-500'>All-day</span>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={draft.all_day}
              onChange={(e) =>
                set(
                  e.target.checked
                    ? { all_day: true, start_min: 0, end_min: 1440 }
                    : { all_day: false, start_min: 9 * 60, end_min: 10 * 60 },
                )
              }
            />
          </label>

          {!draft.all_day && (
            <>
              <span className='text-gray-500'>Time</span>
              <div className='flex items-center gap-2'>
                <input
                  type='time'
                  step={SNAP * 60}
                  className={field}
                  value={toTimeInput(draft.start_min)}
                  onChange={(e) => {
                    const start = fromTimeInput(e.target.value, false)
                    const duration = draft.end_min - draft.start_min
                    set({
                      start_min: start,
                      end_min: Math.min(start + Math.max(duration, SNAP), 1440),
                    })
                  }}
                />
                <span className='text-gray-400'>–</span>
                <input
                  type='time'
                  step={SNAP * 60}
                  className={field}
                  value={toTimeInput(draft.end_min)}
                  onChange={(e) =>
                    set({ end_min: fromTimeInput(e.target.value, true) })
                  }
                />
              </div>
            </>
          )}

          <label className='text-gray-500' htmlFor='activity-location'>
            Location
          </label>
          <input
            id='activity-location'
            className={field}
            value={draft.location}
            maxLength={200}
            onChange={(e) => set({ location: e.target.value })}
          />

          <label
            className='self-start pt-1.5 text-gray-500'
            htmlFor='activity-notes'
          >
            Notes
          </label>
          <textarea
            id='activity-notes'
            className={field}
            rows={3}
            value={draft.notes}
            maxLength={2000}
            onChange={(e) => set({ notes: e.target.value })}
          />

          <span className='text-gray-500'>Color</span>
          <div className='flex gap-2'>
            {(Object.keys(COLORS) as ColorName[]).map((name) => (
              <button
                key={name}
                type='button'
                aria-label={name}
                className='h-6 w-6 rounded-full'
                style={{
                  background: COLORS[name].border,
                  outline:
                    draft.color === name
                      ? `2px solid ${COLORS[name].border}`
                      : 'none',
                  outlineOffset: 2,
                }}
                onClick={() => set({ color: name })}
              />
            ))}
          </div>
        </div>

        {invalid && (
          <div className='mb-3 text-sm text-red-700'>
            The end time must be after the start time.
          </div>
        )}

        {confirming && onDelete ? (
          <div className='mt-5 flex items-center gap-2 rounded-md bg-red-50 p-2'>
            <span className='flex-1 text-sm text-red-800'>
              Delete this activity?
            </span>
            <button
              type='button'
              className='rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-white'
              onClick={() => setConfirming(false)}
            >
              Keep
            </button>
            <button
              type='button'
              autoFocus
              className='rounded-md bg-red-700 px-3 py-1.5 text-sm text-white hover:bg-red-800'
              onClick={onDelete}
            >
              Yes, delete
            </button>
          </div>
        ) : (
          <div className='mt-5 flex items-center gap-2'>
            {onDelete && (
              <button
                type='button'
                className='rounded-md px-3 py-1.5 text-sm text-red-700 hover:bg-red-50'
                onClick={() => setConfirming(true)}
              >
                Delete
              </button>
            )}
            <div className='flex-1' />
            <button
              type='button'
              className='rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100'
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={invalid}
              className='rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700 disabled:opacity-50'
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
