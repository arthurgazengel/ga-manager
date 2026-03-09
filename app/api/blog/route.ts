import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ module: 'blog', message: 'Endpoint prêt pour intégration Prisma complète.' });
}
