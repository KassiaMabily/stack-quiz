import { Loader } from '@/components/loader';
import { Logo } from '@/components/logo';
import QuizList from '@/components/quiz/list';
import { textVariants } from '@/components/ui/text';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className="flex flex-col items-end md:space-y-6">
      <div className="p-6">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full p-6">
        <div>
          <h1 className={textVariants({ variant: 'titleS' })}>
            Welcome to the <br />{' '}
            <Logo />
          </h1>
          <p
            className={cn("my-2", textVariants({
              variant: 'default',
              className: 'italic',
            }))}
          >
            Pick a subject to get started.
          </p>
        </div>
        <Suspense fallback={<Loader />}>
          <QuizList />
        </Suspense>
      </div>
    </div>
  );
}
