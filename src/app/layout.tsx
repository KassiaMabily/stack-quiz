import { siteConfig } from '@/config';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Stack Quiz - Test Your Knowledge',
    template: '%s | Stack Quiz',
  },
  description:
    'Challenge yourself with interactive quizzes on various topics. Test your knowledge and learn something new!',
  keywords: [
    'quiz',
    'learning',
    'education',
    'knowledge',
    'test',
    'interactive',
  ],
  authors: [{ name: 'Kassia Fraga' }],
  creator: 'Frontend Mentor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Stack Quiz - Interactive Knowledge Tests',
    description:
      'Challenge yourself with interactive quizzes on various topics. Test your knowledge and learn something new!',
    siteName: 'Stack Quiz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stack Quiz - Test Your Knowledge',
    description:
      'Challenge yourself with interactive quizzes on various topics',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body>{children}</body>
    </html>
  );
}
