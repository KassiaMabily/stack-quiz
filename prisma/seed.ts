import { PrismaClient } from '@prisma/client';
import { categories } from './constants/categories';
import { quizzes } from './constants/quizzes';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();
  await prisma.questionOption.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    });
  });

  const quizzesSeed = quizzes.map((quiz) => {
    return prisma.quiz.create({
      data: {
        title: quiz.title,
        icon: quiz.icon,
        categoryId: quiz.category,
        questions: {
          create: quiz.questions.map((question) => ({
            question: question.question,
            options: {
              create: question.options.map((option) => ({
                option: option.option,
                isCorrect: option.isCorrect,
              })),
            },
          })),
        },
      },
    });
  });

  await prisma.$transaction([...categoriesSeed, ...quizzesSeed]);
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
