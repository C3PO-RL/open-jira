import { db } from '@/database'
import { Entry, IEntry } from '@/models'
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type Data = { message: string } | IEntry[]

export async function GET(req: NextRequest): Promise<NextResponse<Data>> {
  const { method } = req

  if (method !== 'GET') {
    return NextResponse.json({ message: 'bad request' }, { status: 400 })
  }

  await db.connect()
  const entries: IEntry[] = await Entry.find().sort({ ctreatedAt: 'ascending' })

  await db.disconnect()

  return NextResponse.json(entries, { status: 200 })
}
