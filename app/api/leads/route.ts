import { prisma } from '@/lib/prisma';
import { guardBruteforce, validateCsrf } from '@/lib/security';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  entreprise: z.string().optional(),
  message: z.string().min(5),
  source: z.enum(['formulaire', 'pub', 'seo'])
});

export async function GET() {
  const data = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!guardBruteforce(request.ip ?? 'anon')) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  if (!validateCsrf(request)) return NextResponse.json({ error: 'CSRF token invalid' }, { status: 403 });

  const body = await request.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const lead = await prisma.lead.create({ data: parsed.data });
  await prisma.adminLog.create({ data: { adminUserId: 'system', action: 'create', entity: 'lead', metadata: { leadId: lead.id } } }).catch(() => null);
  return NextResponse.json(lead, { status: 201 });
}
