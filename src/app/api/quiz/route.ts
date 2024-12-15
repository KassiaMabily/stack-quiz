import { prisma } from '@/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categoryId = searchParams.get('categoryId');

  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
    });

    if (!category) {
      return NextResponse.json(
        { message: 'Category not found' },
        { status: 404 }
      );
    }
  }

  const quizzes = await prisma.quiz.findMany({
    where: categoryId ? { categoryId: parseInt(categoryId) } : {},
    include: {
      category: true,
    },
  });

  return NextResponse.json({ quizzes });
}
