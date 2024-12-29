export const host = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const siteConfig = {
  name: 'Stack Quiz',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const;
