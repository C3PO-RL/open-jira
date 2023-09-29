import { db } from '@/database'
import { Entry } from '@/models'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const id = req.url.split('entries/')[1]

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ message: 'bad request' }, { status: 400 })
  }

  await db.connect()
  const entryToUpdate = await Entry.findById(id)

  if (!entryToUpdate) {
    await db.disconnect()
    return NextResponse.json({ message: 'id not found' }, { status: 400 })
  }
  const {
    description = entryToUpdate?.description,
    status = entryToUpdate?.status,
  } = await req.json()
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    )
    await db.disconnect()
    return NextResponse.json({ updatedEntry }, { status: 200 })
  } catch (error: any) {
    console.log({ error })
    await db.disconnect()
    return NextResponse.json(
      { message: error.errors.status.message.message },
      { status: 400 }
    )
  }
}

export async function GET(req: Request) {
  const id = req.url.split('entries/')[1]
  console.log(id)
  try {
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: 'bad request' }, { status: 400 })
    }

    await db.connect()
    const entryById = await Entry.findById(id)

    if (!entryById) {
      await db.disconnect()
      return NextResponse.json({ message: 'id not found' }, { status: 400 })
    } else {
      await db.disconnect()
      return NextResponse.json({ entryById }, { status: 200 })
    }
  } catch (error: any) {
    console.log({ error })
    await db.disconnect()
    return NextResponse.json(
      { message: error.errors.status.message.message },
      { status: 400 }
    )
  }
}
