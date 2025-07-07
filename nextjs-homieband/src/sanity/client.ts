import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { NextResponse } from 'next/server'

export const client = createClient({
  projectId: 'ipjfioh1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // <-- only use Cdn for public read
  token: undefined, // <-- no token for public read
});

const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);
export function urlFor(source: any) {
  return builder.image(source);
}

export async function POST(req: Request) {
  const data = await req.json()

  try {
    await client.create({
      _type: 'contactSubmission',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 })
  }
}