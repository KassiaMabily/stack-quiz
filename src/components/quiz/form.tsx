'use client';

import { QuizState } from '@/components/quiz';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { cn, getOptionLetter } from '@/lib/utils';
import { Radio, RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { ProgressBar } from '../ui/progressbar';

export function QuizForm({
  quiz,
  state,
  setState,
}: {
  quiz: QuizDetail;
  state: QuizState;
  setState: React.Dispatch<React.SetStateAction<QuizState>>;
}) {
  const [ showError, setShowError ] = useState<boolean>(false);
  const { currentQuestion, isSubmitted, pickedOption } = state;
  const options = quiz.questions[currentQuestion].options;
  const lastQuestion = currentQuestion === quiz.totalQuestions - 1;

  const handleOptionPick = (option: QuestionOption) => {
    if(isSubmitted) return;

    setState({ ...state, pickedOption: option });
  }


  const handleNextQuestion = () => {
    if (lastQuestion) return;

    setState({
      ...state,
      currentQuestion: state.currentQuestion + 1,
      pickedOption: null,
      isSubmitted: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pickedOption) {
      setShowError(true);
      return;
    }

    setShowError(false);

    if (pickedOption.isCorrect) {
      setState((prevState) => ({
        ...prevState,
        totalScore: prevState.totalScore + 1,
      }));
    }

    if (lastQuestion) {
      setState((prevState) => ({ ...prevState, isFinished: true }));
      return;
    }

    if (isSubmitted && !lastQuestion) {
      handleNextQuestion();
      return;
    }

    setState((prevState) => ({ ...prevState, isSubmitted: true }));
  };

  return (
    <form
      className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2 w-full p-6 "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-3">
          <Text variant={'default'} className="italic">
            Question {currentQuestion + 1} of {quiz.totalQuestions}
          </Text>
          <Text variant={'headingM'}>
            {quiz.questions[currentQuestion].question}
          </Text>
        </div>
        <ProgressBar current={currentQuestion + 1} total={quiz.totalQuestions} />
      </div>

      <div className="flex flex-col justify-between space-y-6">
        <RadioGroup
          name="options"
          value={pickedOption}
          onChange={handleOptionPick}
          className="space-y-6"
        >
          {options.map((option, index) => (
            <Option
              key={option.id}
              option={option}
              pickedOption={pickedOption}
              position={index}
              showAnswer={isSubmitted}
            />
          ))}
        </RadioGroup>

        <Button
          type="submit"
          variant={'primary'}
          size={'lg'}
          className="py-5"
        >
          <Button.Text variant={'bodyM'}>
            {isSubmitted ? 'Next Question' : 'Submit answer'}
          </Button.Text>
        </Button>

        {
          showError && (
            <Text variant={'bodyM'} className="flex items-center justify-center text-destructive dark:text-destructive">
              <Icon name='error' className='mr-2' size='xl' /> Please select an option
            </Text>
          )
        }
      </div>
    </form>
  );
}

function Option({
  option,
  pickedOption,
  position,
  showAnswer = false,
}: {
  option: QuestionOption;
  pickedOption: QuestionOption | null;
  position: number;
  showAnswer: boolean;
}) {
  const isWrongAnswer = option.id === pickedOption?.id && !option.isCorrect;
  const isCorrectAnswer = option.id === pickedOption?.id && option.isCorrect;

  return (
    <Radio
      key={option.option}
      value={option}
      className={cn(
        buttonVariants({ variant: 'default', size: 'lg' }),
        'transition ease-in duration-300 ring-transparent hover:shadow-md',
        'group cursor-pointer appearance-none focus:outline-none text-wrap',
        'data-[checked]:ring-4 data-[checked]:ring-primary',
        '[&:not([data-focus])]:[&:not([data-checked])]:ring-inset',
        showAnswer && isWrongAnswer && 'data-[checked]:ring-destructive',
        showAnswer && isCorrectAnswer && 'data-[checked]:ring-success'
      )}
    >
      <div className="flex items-center space-x-8  w-full">
        <div
          className={cn(
            'flex items-center justify-center rounded-lg bg-navy-light h-14 w-14',
            showAnswer && isCorrectAnswer && 'bg-success',
            showAnswer && isWrongAnswer && 'bg-destructive',
            !showAnswer &&
              'transition-colors ease-in duration-300 group-hover:bg-[#F6E7FF] group-data-[checked]:bg-primary'
          )}
        >
          <Text
            variant={'bodyM'}
            className="uppercase text-navy-gray dark:text-navy-grey group-hover:text-primary group-data-[checked]:text-white"
          >
            {getOptionLetter(position)}
          </Text>
        </div>
        <Text variant={'bodyM'} className="flex-1">
          {option.option}
        </Text>

        {showAnswer && option.isCorrect && <Icon name={'correct'} size='xl'/>}

        {showAnswer && isWrongAnswer && <Icon name={'incorrect'} size='xl'/>}
      </div>
    </Radio>
  );
}
