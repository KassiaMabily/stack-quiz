'use client';

import { QuizForm } from '@/components/quiz/form';
import { Fragment, useState } from 'react';
import { Finished } from './finished';

export type QuizState = {
  currentQuestion: number;
  pickedOption: QuestionOption | null;
  totalScore: number;
  isSubmitted: boolean;
  isFinished: boolean;
};

export const initialState: QuizState = {
  currentQuestion: 0,
  pickedOption: null,
  totalScore: 0,
  isSubmitted: false,
  isFinished: false,
}

export function Quiz({ quiz }: { quiz: QuizDetail }) {
  const [state, setState] = useState<QuizState>(initialState);

  return (
    <Fragment>
      {state.isFinished ? (
        <Finished state={state} quiz={quiz} />
      ) : (
        <QuizForm state={state} setState={setState} quiz={quiz} />
      )}
    </Fragment>
  );
}
