import { Quiz } from '@/components/quiz';
import { QuizHeader } from '@/components/quiz/header';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { fetchQuiz } from '@/lib/services/quizService';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';


// Renders static content for the quiz detail page when visited for the first time
export const dynamic = 'force-static';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = (await params).id
  const quiz = await fetchQuiz(parseInt(id));

  if (!quiz) {
    notFound();
  }

  return {
    title: quiz.title,
    openGraph: {
      images: [ { url: quiz.icon } ],
    },
  }
}


export default async function Page({ params }: Props) {
  const id = (await params).id
  const quiz = await fetchQuiz(parseInt(id));

  if (!quiz) {
    notFound();
  }

  return (
    <div className="flex flex-col md:space-y-6 min-h-[80%]">
      <div className="p-6 flex items-center justify-between">
        <QuizHeader title={quiz.title} icon={quiz.icon} background={quiz.iconBgHex} />
        <ThemeToggle />
      </div>
      <Quiz quiz={quiz} />
    </div>
  );
}
