import { api } from '@/lib/axios';

export async function fetchQuizzes() {
  try {
    // console.log('Fetching quizzes data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await api.get<ResponseApi<Quiz[]>>('/quiz');

    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch quizzes data.');
  }
}

export async function fetchQuiz(quizId: number) {
  try {
    // console.log('Fetching quizzes data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await api.get<ResponseApi<QuizDetail>>(`/quiz/${quizId}`);

    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch quizzes data.');
  }
}
