import { NextRequest } from 'next/server';

export function validateCsrf(request: NextRequest) {
  const token = request.headers.get('x-csrf-token');
  const cookie = request.cookies.get('csrf-token')?.value;
  return Boolean(token && cookie && token === cookie);
}

const attempts = new Map<string, { count: number; ts: number }>();

export function guardBruteforce(key: string, limit = 30) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || now - current.ts > 60_000) {
    attempts.set(key, { count: 1, ts: now });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}
