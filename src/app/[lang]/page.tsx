import LanguageChanger from '@/components/languague-changer';
import { Logo } from '@/components/logo';
import QuizList from '@/components/quiz/list';
import { QuizListSkeleton } from '@/components/quiz/quizzesSkeleton';
import { textVariants } from '@/components/ui/text';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Locale } from '@/i18n/i18n-config';
import { cn } from '@/lib/utils';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const lang = (await props.params).lang;
  setRequestLocale(lang);
  const t = await getTranslations('HomePage');

  return (
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
        <Suspense fallback={<QuizListSkeleton />}>
          <QuizList lang={lang} />
        </Suspense>
      </div>
    </div>
  );
}
