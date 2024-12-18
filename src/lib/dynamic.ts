'use client';
import dynamic from 'next/dynamic';

export const ThemeProviderDynamic = dynamic(
  () =>
    import('@/contexts/ThemeContext').then((module) => module.ThemeProvider),
  {
    ssr: false,
  }
);
