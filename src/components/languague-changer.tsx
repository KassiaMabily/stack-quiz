'use client';

import i18nConfig from '@/i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageChanger({ languageOptions }: {
  languageOptions: {code: string, name: string }[] }) {
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
    <select onChange={handleChange} value={currentLocale}>
      {languageOptions.map((option) => (
        <option key={option.code} value={option.code}>
          {option.code}
        </option>
      ))}
      <optgroup label="Solicitar idioma">
        {
          availableLocales
            .filter((locale) => !languageOptions.some((option) => option.code === locale))
            .map((locale) => (
            <option key={locale} value={locale}>{locale}</option>
          ))
        }
      </optgroup>
    </select>
  );
}
