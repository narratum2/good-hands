import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Here you would normally persist to your DB or notify your concierge.
    console.log('New booking request', data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error handling booking', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}