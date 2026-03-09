import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ traffic: 12890, conversionRate: 18.6, popularPages: ['/services', '/contact'] });
}
