import { Button } from '@/components/ui/button';
import { fetchQuizzes } from '@/lib/services/quizService';

export default async function QuizList() {
  const quizzes = await fetchQuizzes();

  return (
    <ul className="flex flex-col space-y-6 p-2 text-6xl overflow-y-auto">
      {quizzes.map((quiz, index) => (
        <li key={quiz.id} >
          <Button className="w-full transition-shadow duration-300 ease-in shadow-sm hover:shadow-md" size={'md'} href={`/quiz/${quiz.id}`} tabIndex={index} >
            <Button.Icon
              src={quiz.icon}
              alt={quiz.title}
              style={{ backgroundColor: quiz.iconBgHex }}
            />
            <Button.Text variant={'headingS'}>{quiz.title}</Button.Text>
          </Button>
        </li>
      ))}
    </ul>
  );
}
