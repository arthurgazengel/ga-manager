import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ module: 'services', message: 'Endpoint prêt pour intégration Prisma complète.' });
}
