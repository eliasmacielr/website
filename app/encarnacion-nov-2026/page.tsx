import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Calendar from './Calendar'
import { listActivities, unlock } from './actions'
import { hasAccess, passcodeConfigured } from './access'
import { isConfigured } from './supabase'
import { Activity } from './shared'

export const dynamic = 'force-dynamic'

// Unlisted page: reachable only by its URL. See also the X-Robots-Tag header
// in next.config.js.
export const metadata: Metadata = {
  title: 'Encarnación · November 2026',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default async function EncarnacionNov2026({
  searchParams,
}: {
  searchParams: Promise<{ wrong?: string }>
}) {
  let content: ReactNode

  if (!isConfigured() || !passcodeConfigured()) {
    content = <Notice>The calendar is not configured yet.</Notice>
  } else if (!(await hasAccess())) {
    const { wrong } = await searchParams
    content = <PasscodeForm wrong={Boolean(wrong)} />
  } else {
    let activities: Activity[] | null = null
    try {
      activities = await listActivities()
    } catch {
      // Rendered below.
    }
    content = activities ? (
      <Calendar initialActivities={activities} />
    ) : (
      <Notice>Could not load the activities. Please try again later.</Notice>
    )
  }

  return (
    <div className='px-4 lg:px-0'>
      <h2 className='mb-1'>Encarnación</h2>
      <div className='mb-6 text-lg text-gray-600'>
        Saturday, November 14 – Sunday, November 29, 2026
      </div>
      {content}
    </div>
  )
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className='rounded border border-red-300 bg-red-50 p-4 font-sans text-red-800'>
      {children}
    </div>
  )
}

function PasscodeForm({ wrong }: { wrong: boolean }) {
  return (
    <form
      action={unlock}
      className='max-w-sm rounded-lg border border-gray-300 bg-white p-5 font-sans shadow-sm'
    >
      <label htmlFor='passcode' className='mb-2 block text-sm text-gray-700'>
        Enter the passcode to see and edit the calendar.
      </label>
      <div className='flex gap-2'>
        <input
          id='passcode'
          name='passcode'
          type='password'
          autoFocus
          required
          autoComplete='current-password'
          className='w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none'
        />
        <button
          type='submit'
          className='rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-700'
        >
          Open
        </button>
      </div>
      {wrong && (
        <div className='mt-2 text-sm text-red-700'>
          That passcode is not right.
        </div>
      )}
    </form>
  )
}
