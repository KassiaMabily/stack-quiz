import { Quiz } from '@/components/quiz';
import { QuizHeader } from '@/components/quiz/header';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Locale } from '@/i18n/i18n-config';
import { routing } from '@/i18n/routing';
import { fetchQuiz } from '@/lib/services/quizService';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string; lang: Locale }>;
};

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const lang = (await params).lang;

  const quiz = await fetchQuiz(parseInt(id), lang);

  if (!quiz) {
    notFound();
  }

  const title = `${quiz.title} Quiz`;
  const description = `Test your knowledge with our ${quiz.title} quiz. Interactive questions and immediate feedback!`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: quiz.icon,
          width: 1200,
          height: 630,
          alt: `${quiz.title} Quiz Cover Image`,
        },
      ],
      locale: lang,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [quiz.icon],
    },
  };
}

export default async function QuizPage({ params }: Props) {
  const id = (await params).id;
  const lang = (await params).lang;

  setRequestLocale(lang);

  const quiz = await fetchQuiz(parseInt(id), lang);

  if (!routing.locales.includes(lang as Locale) || !quiz) {
    notFound();
  }

  return (
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
  );
}
