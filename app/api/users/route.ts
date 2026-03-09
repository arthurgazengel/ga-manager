import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ module: 'users', message: 'Endpoint prêt pour intégration Prisma complète.' });
}
