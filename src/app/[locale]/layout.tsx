import { Footer } from '@/components/footer';
import i18nConfig from '@/i18nConfig';
import { ThemeProviderDynamic } from '@/lib/dynamic';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    template: '%s | StackQuiz App',
    default: 'StackQuiz App',
  },
  description: 'Quiz app for developers',
  metadataBase
};

export const experimental_ppr = true;

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode,
  params:  Promise<{ locale: string }>
}>) {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`bg-background bg-cover bg-no-repeat text-foreground bg-background-mobile dark:bg-background-mobile-dark md:bg-background-tablet dark:md:bg-background-tablet-dark lg:bg-background-desktop dark:lg:bg-background-desktop-dark
        ${rubik.variable} font-sans antialiased`}
      >
        <ThemeProviderDynamic>
          <main className="h-screen max-h-screen mx-auto lg:max-w-7xl pt-0 md:pt-16 xl:pt-24">
            {children}
            <Footer />
          </main>
        </ThemeProviderDynamic>
      </body>
    </html>
  );
}
