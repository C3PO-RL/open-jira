import { db, seedData } from '@/database'
import { Entry } from '@/models'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return new Response(JSON.stringify({ message: 'access not allowed' }), {
      status: 401,
    })
  }

  await db.connect()
  await Entry.deleteMany()
  await Entry.insertMany(seedData.entries)
  await db.disconnect()
  return new Response(JSON.stringify({ message: 'success' }), {
    status: 200,
  })
}
