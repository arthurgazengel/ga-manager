import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ module: 'analytics', message: 'Endpoint prêt pour intégration Prisma complète.' });
}
