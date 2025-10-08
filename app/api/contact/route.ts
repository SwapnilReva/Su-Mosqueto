import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}))
  // In a real app, persist or send an email here.
  return NextResponse.json({ ok: true, received: data }, { status: 200 })
}
