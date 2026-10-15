'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { COOKIE, PATH, requireAccess, sameToken, token } from './access'
import { getSupabase, TABLE } from './supabase'
import { Activity, ActivityInput, COLORS, ColorName, DAYS } from './shared'

const COLUMNS = 'id,title,date,start_min,end_min,all_day,location,notes,color'
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function clean(input: ActivityInput): ActivityInput {
  const date = String(input.date)
  if (!DAYS.includes(date)) throw new Error('Invalid date')

  const all_day = Boolean(input.all_day)
  const start_min = all_day ? 0 : Math.round(Number(input.start_min))
  const end_min = all_day ? 1440 : Math.round(Number(input.end_min))
  if (
    !Number.isFinite(start_min) ||
    !Number.isFinite(end_min) ||
    start_min < 0 ||
    end_min > 1440 ||
    end_min <= start_min
  ) {
    throw new Error('Invalid time range')
  }

  const color = String(input.color)
  return {
    title:
      String(input.title ?? '')
        .trim()
        .slice(0, 200) || 'New activity',
    date,
    start_min,
    end_min,
    all_day,
    location: String(input.location ?? '')
      .trim()
      .slice(0, 200),
    notes: String(input.notes ?? '').slice(0, 2000),
    color: Object.hasOwn(COLORS, color) ? (color as ColorName) : 'blue',
  }
}

function checkId(id: string) {
  if (!UUID.test(String(id))) throw new Error('Invalid id')
}

export async function listActivities(): Promise<Activity[]> {
  await requireAccess()
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select(COLUMNS)
    .order('date')
    .order('start_min')
  if (error) throw new Error(error.message)
  return data as Activity[]
}

export async function createActivity(input: ActivityInput): Promise<Activity> {
  await requireAccess()
  const { data, error } = await getSupabase()
    .from(TABLE)
    .insert(clean(input))
    .select(COLUMNS)
    .single()
  if (error) throw new Error(error.message)
  return data as Activity
}

export async function updateActivity(
  id: string,
  input: ActivityInput,
): Promise<Activity> {
  await requireAccess()
  checkId(id)
  const { data, error } = await getSupabase()
    .from(TABLE)
    .update({ ...clean(input), updated_at: new Date().toISOString() })
    .eq('id', id)
    .select(COLUMNS)
    .single()
  if (error) throw new Error(error.message)
  return data as Activity
}

export async function deleteActivity(id: string): Promise<void> {
  await requireAccess()
  checkId(id)
  const { error } = await getSupabase().from(TABLE).delete().eq('id', id)
  if (error) throw new Error(error.message)
}

export async function unlock(formData: FormData) {
  const passcode = process.env.ENCARNACION_PASSCODE
  const attempt = String(formData.get('passcode') ?? '').trim()
  if (!passcode || !sameToken(token(attempt), token(passcode))) {
    // Slow down guessing.
    await new Promise((resolve) => setTimeout(resolve, 1000))
    redirect(`${PATH}?wrong=1`)
  }
  ;(await cookies()).set(COOKIE, token(passcode), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: PATH,
    maxAge: 60 * 60 * 24 * 90,
  })
  redirect(PATH)
}
