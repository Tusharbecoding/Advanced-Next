import 'server-only'
import { db } from '@/db/db'
import { and, asc, count, desc, eq, ne, not } from 'drizzle-orm'
import { events, rsvps } from '@/db/schema'
import { delay } from './delay'
// import { memoize } from 'nextjs-better-unstable-cache'

export const getEventsForDashboard = async (userId: string) => {
  await delay

  return
}
