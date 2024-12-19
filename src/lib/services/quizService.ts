import { prisma } from "../prisma";

export async function fetchQuizzes(): Promise<Quiz[]> {
  return await prisma.quiz.findMany({
    include: {
      category: true,
    },
  });
}

export async function fetchQuiz(id: number): Promise<QuizDetail | null> {
  const quiz = await prisma.quiz.findUnique({
    where: { id },
    include: {
      category: true,
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  if (quiz) {
    return {
      ...quiz,
      totalQuestions: quiz.questions.length,
    };
  }

  return null;
}
