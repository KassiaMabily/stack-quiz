import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const quizId = (await params).id;

  const quiz = await prisma.quiz.findUnique({
    where: {
      id: parseInt(quizId),
    },
    include: {
      category: true,
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  if (!quiz) {
    return NextResponse.json({ message: 'Quiz not found' }, { status: 404 });
  }

  return NextResponse.json<ResponseApi<QuizDetail>>({
    data: { totalQuestions: quiz.questions.length, ...quiz },
    message: 'Quizzes fetched',
    status: 200,
  });
}
