'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useTranslation } from 'react-i18next';
import { QuizState } from '.';
import { buttonVariants } from '../ui/button';
import { Text } from '../ui/text';
import { QuizHeader } from './header';

export function Finished({
  state,
  quiz,
}: {
  quiz: QuizDetail;
  state: QuizState;
}) {
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full p-6 ">
      <Confetti numberOfPieces={isConfettiActive ? 200 : 0} />
      <div>
        <Text variant={'titleS'} asChild>
          <h1>{t('finished.title')}</h1>
        </Text>
        <Text variant={'titleM'} asChild>
          <p>{t('finished.description')}</p>
        </Text>
      </div>
      <div className="space-y-8">
        <div className="bg-secondary rounded-3xl p-12 space-y-10 flex flex-col items-center justify-between">
          <QuizHeader
            title={quiz.title}
            icon={quiz.icon}
            background={quiz.iconBgHex}
          />
          <div className="flex flex-col items-center space-y-4">
            <p className="font-medium text-[5rem]">{state.totalScore}</p>

            <Text
              variant={'bodyM'}
              className="text-navy-grey dark:text-bluish"
              asChild
            >
              <legend>out of {quiz.totalQuestions}</legend>
            </Text>
          </div>
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: 'primary', size: 'lg' }),
            'w-full'
          )}
          href="/"
        >
          <Text variant={'bodyM'}>{t('finished.button')}</Text>
        </Link>
      </div>
    </div>
  );
}
