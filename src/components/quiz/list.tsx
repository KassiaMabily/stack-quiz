import { Button, buttonVariants } from '@/components/ui/button';
import { fetchQuizzesByLanguage } from '@/lib/services/quizService';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function QuizList() {
  const quizzes = await fetchQuizzesByLanguage('en');

  if (!quizzes) {
    throw new Error('Failed to fetch quizzes');
  }

  return (
    <ul className="flex flex-col space-y-6 p-2 text-6xl overflow-y-auto">
      {quizzes.map((quiz, index) => (
        <li key={quiz.id} role='listitem'>
          <Link
            className={cn(buttonVariants({ variant: 'default', size: 'md'}), "w-full transition-shadow duration-300 ease-in shadow-sm hover:shadow-md")}
            href={`/quiz/${quiz.id}`}
            tabIndex={index}
            role='link'
            aria-label={quiz.title}
            prefetch
          >
            <Button.Icon
              src={quiz.icon}
              alt={quiz.title}
              style={{ backgroundColor: quiz.iconBgHex }}
            />
            <Button.Text variant={'headingS'}>{quiz.title}</Button.Text>
          </Link>
        </li>
      ))}
    </ul>
  );
}
