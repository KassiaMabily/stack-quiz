/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { categories } from './constants/categories';
import { languages } from './constants/languages';
import { quizzes as englishQuizzes } from './constants/quizzes/english';
import { quizzes as portugueseQuizzes } from './constants/quizzes/portuguese';

const prisma = new PrismaClient();

async function main() {
  // Limpar tabelas existentes
  await prisma.category.deleteMany({});
  await prisma.questionOptionTranslation.deleteMany({});
  await prisma.questionTranslation.deleteMany({});
  await prisma.quizTranslation.deleteMany({});
  await prisma.questionOption.deleteMany({});
  await prisma.question.deleteMany({});
  await prisma.quiz.deleteMany({});
  await prisma.language.deleteMany({});

  // Criar categorias
  await prisma.category.createMany({
    data: categories.map((category) => ({
      id: category.id,
      name: category.name,
    })),
  });

  // Criar idiomas
  await prisma.language.createMany({
    data: languages.map((language) => ({
      id: language.id,
      name: language.name,
      code: language.code,
    })),
  });

  // Obter o idioma inglês (considerando que ele existe em `languages`)
  const englishLanguage = languages.find((lang) => lang.code === 'en');
  if (!englishLanguage) {
    throw new Error(
      "Idioma inglês ('en') não está definido nos dados de origem."
    );
  }

  // Obter o idioma português (considerando que ele existe em `languages`)
  const portugueseLanguage = languages.find((lang) => lang.code === 'pt-BR');
  if (!portugueseLanguage) {
    throw new Error(
      "Idioma português ('pt-BR') não está definido nos dados de origem."
    );
  }

  // Criar quizzes com traduções em inglês e português
  for (let i = 0; i < englishQuizzes.length; i++) {
    const englishQuiz = englishQuizzes[i];
    const portugueseQuiz = portugueseQuizzes[i];

    await prisma.quiz.create({
      data: {
        icon: englishQuiz.icon,
        iconBgHex: englishQuiz.iconBgHex,
        categoryId: englishQuiz.category,
        translations: {
          create: [
            {
              title: englishQuiz.title,
              languageId: englishLanguage.id,
            },
            {
              title: portugueseQuiz.title,
              languageId: portugueseLanguage.id,
            }
          ],
        },
        questions: {
          create: englishQuiz.questions.map((englishQuestion: any, index: number) => {
            const portugueseQuestion = portugueseQuiz.questions[index];
            
            return {
              translations: {
                create: [
                  {
                    description: englishQuestion.question,
                    languageId: englishLanguage.id,
                  },
                  {
                    description: portugueseQuestion.question,
                    languageId: portugueseLanguage.id,
                  }
                ],
              },
              options: {
                create: englishQuestion.options.map((englishOption: any, optIndex: number) => {
                  const portugueseOption = portugueseQuestion.options[optIndex];
                  
                  return {
                    isCorrect: englishOption.isCorrect,
                    translations: {
                      create: [
                        {
                          option: englishOption.option,
                          languageId: englishLanguage.id,
                        },
                        {
                          option: portugueseOption.option,
                          languageId: portugueseLanguage.id,
                        }
                      ],
                    },
                  };
                }),
              },
            };
          }),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
