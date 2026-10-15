import type { Metadata } from 'next'

import Calendar from './Calendar'
import { listActivities } from './actions'
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

export default async function EncarnacionNov2026() {
  let activities: Activity[] = []
  let error: string | null = null

  if (!isConfigured()) {
    error = 'The calendar database is not configured yet.'
  } else {
    try {
      activities = await listActivities()
    } catch {
      error = 'Could not load the activities. Please try again later.'
    }
  }

  return (
    <div className='px-4 lg:px-0'>
      <h2 className='mb-1'>Encarnación</h2>
      <div className='mb-6 text-lg text-gray-600'>
        Saturday, November 14 – Sunday, November 29, 2026
      </div>
      {error ? (
        <div className='rounded border border-red-300 bg-red-50 p-4 font-sans text-red-800'>
          {error}
        </div>
      ) : (
        <Calendar initialActivities={activities} />
      )}
    </div>
  )
}
