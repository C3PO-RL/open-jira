import { NextRequest, NextResponse } from 'next/server'

type Data = {
  name: string
}

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify({ name: 'response' }), { status: 200 })
}
