import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ module: 'newsletter', message: 'Endpoint prêt pour intégration Prisma complète.' });
}
