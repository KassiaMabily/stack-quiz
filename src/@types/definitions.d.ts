type ResponseApi<T> = {
  status: number;
  message: string;
  data: T;
};

type Category = {
  id: number;
  name: string;
  quizzes?: Quiz[];
};

type Quiz = {
  id: number;
  title: string;
  icon: string;
  iconBgHex: string;
  category: Category | null;
  categoryId: number | null;
};

type QuizDetail = Quiz & {
  questions: Question[];
  totalQuestions: number;
};

type Question = {
  id: number;
  question: string;
  quizId: number;
  options: QuestionOption[];
  quiz?: Quiz | null;
};

type QuestionOption = {
  id: number;
  option: string;
  isCorrect: boolean;
  questionId: number;
  question?: Question | null;
};
