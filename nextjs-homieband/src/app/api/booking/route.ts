import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const writeClient = createClient({
  projectId: 'ipjfioh1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await writeClient.create({
      _type: 'booking',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Sanity submit error:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
