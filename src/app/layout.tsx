import { Footer } from '@/components/footer';
import { ThemeProviderDynamic } from '@/lib/dynamic';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'StackQuiz App',
  description: 'Quiz app for web developers',
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
