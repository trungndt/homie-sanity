// src/app/api/hero/route.ts
import { client } from '@/sanity/client'; // must use useCdn: true
import groq from 'groq';

const heroQuery = groq`*[_type == "hero"][0]`;

export async function GET() {
  try {
    const data = await client.fetch(heroQuery);
    return Response.json(data);
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return new Response('Failed to fetch hero data', { status: 500 });
  }
}
