// lib/user-identifier.ts
import { createHash } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'pattern_user_token';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

// Generate a unique browser token
export function generateBrowserToken(): string {
  return createHash('sha256')
    .update(`${Date.now()}-${Math.random()}-${Math.random()}`)
    .digest('hex');
}

// Get or create browser token from cookies
export async function getBrowserToken(): Promise<string> {
  const cookieStore = await cookies();
  let token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    token = generateBrowserToken();
    cookieStore.set(COOKIE_NAME, token, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });
  }

  return token;
}

// Get user IP from request headers
export function getUserIP(headers: Headers): string {
  // Try various headers in order of preference
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback
  return 'unknown';
}

// Create a unique identifier from browser token + IP
export function createUserIdentifier(browserToken: string, ip: string): string {
  return createHash('sha256')
    .update(`${browserToken}:${ip}`)
    .digest('hex');
}

// Main function to get user identifier
export async function getUserIdentifier(headers: Headers): Promise<string> {
  const browserToken = await getBrowserToken();
  const ip = getUserIP(headers);
  return createUserIdentifier(browserToken, ip);
}
