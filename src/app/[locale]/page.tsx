import LanguageChanger from '@/components/languague-changer';
import { Loader } from '@/components/loader';
import { Logo } from '@/components/logo';
import QuizList from '@/components/quiz/list';
import TranslationsProvider from '@/components/translations-provider';
import { textVariants } from '@/components/ui/text';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import initTranslations from '../i18n';

const i18nNamespaces = ['home'];

export default async function Page(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col md:space-y-6">
        <div className="p-6 flex items-center justify-between">
          <LanguageChanger />
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full p-6">
          <div>
            <h1 className={textVariants({ variant: 'titleS' })}>
              {t('greeting')}
              <br /> <Logo />
            </h1>
            <p
              className={cn(
                'my-2',
                textVariants({
                  variant: 'default',
                  className: 'italic',
                })
              )}
            >
              {t('legend')}
            </p>
          </div>
          <Suspense fallback={<Loader />}>
            <QuizList locale={locale} />
          </Suspense>
        </div>
      </div>
    </TranslationsProvider>
  );
}
