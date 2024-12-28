'use client';

import i18nConfig from '@/i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { ChevronDown } from 'react-feather';
import { useTranslation } from 'react-i18next';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const availableLocales = i18nConfig.locales;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="mt-2 grid grid-cols-1">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary py-1.5 pl-3 pr-8 text-base text-secondary-foreground outline outline-1 outline-bluish focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
      >
        {availableLocales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-secondary-foreground sm:size-4" />
    </div>
  );
}
