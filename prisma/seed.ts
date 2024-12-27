import { PrismaClient } from '@prisma/client';
import { categories } from './constants/categories';
import { languages } from './constants/languages';
import { quizzes } from './constants/quizzes';

const prisma = new PrismaClient();

async function main() {
  // Limpar tabelas existentes
  await prisma.language.deleteMany();
  await prisma.category.deleteMany();
  await prisma.questionOption.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  // Criar categorias
  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    });
  });

  // Criar idiomas
  const languagesSeed = languages.map((language) => {
    return prisma.language.create({
      data: {
        id: language.id,
        name: language.name,
        code: language.code,
      },
    });
  });

  // Obter o idioma inglês (considerando que ele existe em `languages`)
  const englishLanguage = languages.find((lang) => lang.code === 'en');
  if (!englishLanguage) {
    throw new Error("Idioma inglês ('en') não está definido nos dados de origem.");
  }

  // Criar quizzes, perguntas e opções com traduções em inglês
  const quizzesSeed = quizzes.map((quiz) => {
    return prisma.quiz.create({
      data: {
        icon: quiz.icon,
        iconBgHex: quiz.iconBgHex,
        categoryId: quiz.category,
        questions: {
          create: quiz.questions.map((question) => ({
            options: {
              create: question.options.map((option) => ({
                isCorrect: option.isCorrect,
                translations: {
                  create: {
                    option: option.option,
                    languageId: englishLanguage.id,
                  },
                },
              })),
            },
            translations: {
              create: {
                description: question.question,
                languageId: englishLanguage.id,
              },
            },
          })),
        },
        translations: {
          create: {
            title: quiz.title,
            languageId: englishLanguage.id,
          },
        },
      },
    });
  });

  // Executar transação de inserção
  await prisma.$transaction([...categoriesSeed, ...languagesSeed, ...quizzesSeed]);
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
