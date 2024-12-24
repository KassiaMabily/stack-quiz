import { prisma } from '../prisma';
import { fetchQuiz, fetchQuizzes } from './quizService';

jest.mock('../prisma', () => ({
    prisma: {
        quiz: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
        },
    },
}));

describe('fetchQuizzes', () => {
    it('should fetch quizzes with categories', async () => {
        const mockQuizzes = [
            { id: 1, name: 'Quiz 1', category: { id: 1, name: 'Category 1' } },
            { id: 2, name: 'Quiz 2', category: { id: 2, name: 'Category 2' } },
        ];

        (prisma.quiz.findMany as jest.Mock).mockResolvedValue(mockQuizzes);

        const result = await fetchQuizzes();

        expect(prisma.quiz.findMany).toHaveBeenCalledWith({
            include: {
                category: true,
            },
        });
        expect(result).toEqual(mockQuizzes);
    });
});

describe('fetchQuiz', () => {
    it('should fetch a quiz by id with categories, questions, and options', async () => {
        const mockQuiz = {
            id: 1,
            name: 'Quiz 1',
            category: { id: 1, name: 'Category 1' },
            questions: [
                {
                    id: 1,
                    text: 'Question 1',
                    options: [
                        { id: 1, text: 'Option 1' },
                        { id: 2, text: 'Option 2' },
                    ],
                },
            ],
        };

        (prisma.quiz.findUnique as jest.Mock).mockResolvedValue(mockQuiz);

        const result = await fetchQuiz(1);

        expect(prisma.quiz.findUnique).toHaveBeenCalledWith({
            where: { id: 1 },
            include: {
                category: true,
                questions: {
                    include: {
                        options: true,
                    },
                },
            },
        });
        expect(result).toEqual({
            ...mockQuiz,
            totalQuestions: mockQuiz.questions.length,
        });
    });

    it('should return null if quiz not found', async () => {
        (prisma.quiz.findUnique as jest.Mock).mockResolvedValue(null);

        const result = await fetchQuiz(1);

        expect(prisma.quiz.findUnique).toHaveBeenCalledWith({
            where: { id: 1 },
            include: {
                category: true,
                questions: {
                    include: {
                        options: true,
                    },
                },
            },
        });
        expect(result).toBeNull();
    });
});
