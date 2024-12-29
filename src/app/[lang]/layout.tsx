import { Footer } from '@/components/footer';
import { Locale } from '@/i18n/i18n-config';
import { routing } from '@/i18n/routing';
import { ThemeProviderDynamic } from '@/lib/dynamic';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
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

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
);

export const metadata: Metadata = {
  title: {
    template: '%s | StackQuiz App',
    default: 'StackQuiz App',
  },
  description: 'Quiz app for developers',
  metadataBase,
};

// export const experimental_ppr = true;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
  }>
) {
  const params = await props.params;
  const { children } = props;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(params.lang)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(params.lang);

  const messages = await getMessages();

  return (
    <html lang={params.lang}>
      <body
        className={`bg-background bg-cover bg-no-repeat text-foreground bg-background-mobile dark:bg-background-mobile-dark md:bg-background-tablet dark:md:bg-background-tablet-dark lg:bg-background-desktop dark:lg:bg-background-desktop-dark
        ${rubik.variable} font-sans antialiased`}
      >
        <ThemeProviderDynamic>
          <NextIntlClientProvider messages={messages}>
            <main className="h-screen max-h-screen mx-auto lg:max-w-7xl pt-0 md:pt-16 xl:pt-24">
              {children}
              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProviderDynamic>
      </body>
    </html>
  );
}
