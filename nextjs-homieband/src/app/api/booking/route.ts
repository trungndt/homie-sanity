import { NextResponse } from 'next/server'
import { client } from '@/sanity/client' // ✅ import from shared config

export async function POST(req: Request) {
  try {
    const data = await req.json()

    await client.create({
      _type: 'booking', // make sure this matches your schema
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sanity submit error:', err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
