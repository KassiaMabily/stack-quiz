import { Quiz } from '@/components/quiz';
import { QuizHeader } from '@/components/quiz/header';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Locale } from '@/i18n/i18n-config';
import { routing } from '@/i18n/routing';
import { fetchAllQuizzes, fetchQuiz } from '@/lib/services/quizService';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string; lang: Locale }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const locales = routing.locales;
  const quizzes = await fetchAllQuizzes();

  if (!quizzes) {
    return [];
  }

  return quizzes
    .filter((quiz) => locales.includes(quiz.locale as Locale))
    .map((quiz) => ({
      id: quiz.id.toString(),
      lang: quiz.locale,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const lang = (await params).lang;
  const quiz = await fetchQuiz(parseInt(id), lang);

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
  const lang = (await params).lang;
  const quiz = await fetchQuiz(parseInt(id), lang);

  if (!routing.locales.includes(lang as Locale)) {
    notFound();
  }

  if (!quiz) {
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
