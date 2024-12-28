import initTranslations from '@/app/i18n';
import { Quiz } from '@/components/quiz';
import { QuizHeader } from '@/components/quiz/header';
import TranslationsProvider from '@/components/translations-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { fetchQuiz } from '@/lib/services/quizService';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Renders static content for the quiz detail page when visited for the first time
export const dynamic = 'force-static';
const i18nNamespaces = ['quiz'];

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params;
  const quiz = await fetchQuiz(parseInt(id), locale);

  if (!quiz) {
    notFound();
  }

  return {
    title: quiz.title,
    openGraph: {
      images: [{ url: quiz.icon }],
    },
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).id;
  const locale = (await params).locale;
  const quiz = await fetchQuiz(parseInt(id), locale);
  const { resources } = await initTranslations(locale, i18nNamespaces);

  if (!quiz) {
    notFound();
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col md:space-y-6 min-h-[80%]">
        <div className="p-6 flex items-center justify-between">
          <QuizHeader
            title={quiz.title}
            icon={quiz.icon}
            background={quiz.iconBgHex}
          />
          <ThemeToggle />
        </div>
        <Quiz quiz={quiz} />
      </div>
    </TranslationsProvider>
  );
}
