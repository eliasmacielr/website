import { createHash, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

// Shared passcode gate. The cookie holds a hash of the passcode, so changing
// ENCARNACION_PASSCODE signs everyone out.
export const COOKIE = 'encarnacion_access'
export const PATH = '/encarnacion-nov-2026'

export function token(passcode: string) {
  return createHash('sha256')
    .update(`encarnacion-nov-2026:${passcode}`)
    .digest('hex')
}

export function sameToken(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export function passcodeConfigured() {
  return Boolean(process.env.ENCARNACION_PASSCODE)
}

export async function hasAccess() {
  const passcode = process.env.ENCARNACION_PASSCODE
  if (!passcode) return false
  const value = (await cookies()).get(COOKIE)?.value
  return Boolean(value) && sameToken(value!, token(passcode))
}

export async function requireAccess() {
  if (!(await hasAccess())) throw new Error('Unauthorized')
}
