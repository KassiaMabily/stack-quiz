/*
  Warnings:

  - You are about to drop the column `question` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `option` on the `QuestionOption` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "question";

-- AlterTable
ALTER TABLE "QuestionOption" DROP COLUMN "option";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "title";

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizTranslation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "QuizTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionTranslation" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "QuestionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionOptionTranslation" (
    "id" SERIAL NOT NULL,
    "option" TEXT NOT NULL,
    "questionOptionId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "QuestionOptionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- AddForeignKey
ALTER TABLE "QuizTranslation" ADD CONSTRAINT "QuizTranslation_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizTranslation" ADD CONSTRAINT "QuizTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionTranslation" ADD CONSTRAINT "QuestionTranslation_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionTranslation" ADD CONSTRAINT "QuestionTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionOptionTranslation" ADD CONSTRAINT "QuestionOptionTranslation_questionOptionId_fkey" FOREIGN KEY ("questionOptionId") REFERENCES "QuestionOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionOptionTranslation" ADD CONSTRAINT "QuestionOptionTranslation_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
