import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const QuizSkeleton = () => {
  return (
    <div
      className={cn(
        buttonVariants({ variant: 'default', size: 'md' }),
        'shimmer relative overflow-hidden'
      )}
    >
      <div className="h-14 w-14 rounded-lg p-2 bg-background" />
      <div className="h-8 w-full rounded-md bg-background" />
    </div>
  );
};

export const QuizListSkeleton = () => {
  return (
    <div className="flex flex-col space-y-6 p-2 text-6xl overflow-y-auto">
      <QuizSkeleton />
      <QuizSkeleton />
      <QuizSkeleton />
      <QuizSkeleton />
    </div>
  );
};
