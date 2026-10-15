// Shared between the server actions and the client calendar.

export const DAYS: string[] = Array.from(
  { length: 16 },
  (_, i) => `2026-11-${String(14 + i).padStart(2, '0')}`,
)

export const COLORS = {
  blue: { border: '#2f7bf5', bg: '#dce9fd', text: '#1a4d9e' },
  green: { border: '#34a853', bg: '#dcf3e1', text: '#1e6b34' },
  red: { border: '#e5484d', bg: '#fde0e1', text: '#9b1c20' },
  orange: { border: '#f08c28', bg: '#fdebd8', text: '#94520f' },
  purple: { border: '#9b59d0', bg: '#eedff9', text: '#5e2d86' },
  yellow: { border: '#e0b100', bg: '#fbf3cc', text: '#7a5f00' },
}

export type ColorName = keyof typeof COLORS

export type Activity = {
  id: string
  title: string
  date: string // YYYY-MM-DD, local time in Encarnación
  start_min: number // minutes since midnight
  end_min: number // minutes since midnight, up to 1440
  all_day: boolean
  location: string
  notes: string
  color: ColorName
}

export type ActivityInput = Omit<Activity, 'id'>

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function dayInfo(date: string) {
  const day = Number(date.slice(8, 10))
  const weekday = new Date(Date.UTC(2026, 10, day)).getUTCDay()
  return {
    day,
    weekday: WEEKDAYS[weekday],
    weekend: weekday === 0 || weekday === 6,
  }
}

export function formatMinutes(m: number) {
  const h = Math.floor(m / 60) % 24
  return `${String(h).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
}
