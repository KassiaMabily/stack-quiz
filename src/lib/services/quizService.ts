import { prisma } from '../prisma';

export async function fetchAllQuizzes() {
  return await prisma.quiz
    .findMany({
      include: {
        translations: {
          select: {
            language: {
              select: {
                code: true,
              },
            },
          },
        },
      },
    })
    .then((quizzes) =>
      quizzes.flatMap((quiz) =>
        quiz.translations.map((translation) => ({
          id: quiz.id,
          locale: translation.language.code,
        }))
      )
    );
}

export async function fetchQuizzesByLanguage(
  languageCode: string = 'en'
): Promise<Quiz[] | []> {
  if (!(await prisma.language.findUnique({ where: { code: languageCode } }))) {
    throw new Error('Language not found');
  }

  return await prisma.quiz
    .findMany({
      include: {
        category: true,
        translations: {
          where: {
            language: {
              code: languageCode,
            },
          },
          select: {
            title: true,
          },
        },
      },
    })
    .then((quizzes) =>
      quizzes.map((quiz) => ({
        id: quiz.id,
        title: quiz.translations[0]?.title || 'Untitled', // Fallback caso não haja tradução
        icon: quiz.icon,
        iconBgHex: quiz.iconBgHex,
        category: quiz.category,
        categoryId: quiz.categoryId,
      }))
    );
}

export async function fetchQuiz(
  id: number,
  languageCode = 'en'
): Promise<QuizDetail | null> {
  if (!(await prisma.language.findUnique({ where: { code: languageCode } }))) {
    throw new Error('Language not found');
  }

  const quiz = await prisma.quiz.findUnique({
    where: { id },
    include: {
      category: true,
      translations: {
        where: {
          language: {
            code: languageCode,
          },
        },
        select: {
          title: true,
        },
      },
      questions: {
        include: {
          translations: {
            where: {
              language: {
                code: languageCode,
              },
            },
            select: {
              description: true,
            },
          },
          options: {
            include: {
              translations: {
                where: {
                  language: {
                    code: languageCode,
                  },
                },
                select: {
                  option: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (quiz) {
    return {
      id: quiz.id,
      title: quiz.translations[0]?.title || 'Untitled', // Fallback para título padrão
      icon: quiz.icon,
      iconBgHex: quiz.iconBgHex,
      category: quiz.category,
      categoryId: quiz.categoryId,
      questions: quiz.questions
        .sort(() => 0.5 - Math.random())
        .map((question) => ({
          id: question.id,
          question: question.translations[0]?.description || 'No description', // Fallback para descrição padrão
          quizId: question.quizId,
          options: question.options
            .sort(() => 0.5 - Math.random())
            .map((option) => ({
              id: option.id,
              option: option.translations[0]?.option || 'No option', // Fallback para opção padrão
              isCorrect: option.isCorrect,
              questionId: option.questionId,
            })),
        })),
      totalQuestions: quiz.questions.length,
    };
  }

  return null;
}
