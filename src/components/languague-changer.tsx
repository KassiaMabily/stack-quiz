'use client';

import { i18n, Locale } from '@/i18n/i18n-config';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'react-feather';

export default function LanguageChanger() {
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className="mt-2 grid grid-cols-1">
      <select
        onChange={(e) => redirectedPathname(e.target.value as Locale)}
        value={params.lang}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary py-1.5 pl-3 pr-8 text-base text-secondary-foreground outline outline-1 outline-bluish focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-secondary-foreground sm:size-4" />
    </div>
  );
}
