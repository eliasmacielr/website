import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Only used on the server. The table has RLS enabled with no policies, so it
// is reachable exclusively through this service-role client.
export const TABLE = 'encarnacion_activities'

const url = () =>
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
const key = () =>
  process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY

let client: SupabaseClient | null = null

export function isConfigured() {
  return Boolean(url() && key())
}

export function getSupabase() {
  if (!client) {
    const u = url()
    const k = key()
    if (!u || !k) throw new Error('Supabase environment variables are missing')
    client = createClient(u, k, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }
  return client
}
