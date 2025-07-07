// app/api/test-token/route.ts

export async function GET() {
  console.log('SANITY_API_WRITE_TOKEN:', process.env.SANITY_API_WRITE_TOKEN);

  return new Response(JSON.stringify({
    ok: true,
    token: !!process.env.SANITY_API_WRITE_TOKEN
  }), {
    status: 200
  });
}
