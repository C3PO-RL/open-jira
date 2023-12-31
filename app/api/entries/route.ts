import { db } from '@/database'
import { Entry, IEntry } from '@/models'
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

export async function POST(req: Request) {
  const { description } = await req.json()
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  })
  try {
    await db.connect()
    await newEntry.save()
    await db.disconnect()
    return NextResponse.json(newEntry, { status: 201 })
  } catch (error) {
    await db.disconnect()
    console.error(error)
    return NextResponse.json({ message: 'Error' }, { status: 500 })
  }
}
