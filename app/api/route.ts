import { db } from '@/database'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return new Response(JSON.stringify({ message: 'access not allowed' }), {
      status: 401,
    })
  }

  await db.connect()
  await db.disconnect()
  return new Response(JSON.stringify({ message: 'success' }), {
    status: 200,
  })
}
