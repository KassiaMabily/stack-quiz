import QuizList from '@/components/quiz/list';
import { fetchQuizzesByLanguage } from '@/lib/services/quizService';
import { act, render, screen } from '@testing-library/react';

jest.mock('@/lib/services/quizService');

const mockQuizzes = [
    {
        id: '1',
        title: 'Quiz 1',
        icon: '/path/to/icon1.png',
        iconBgHex: '#ff0000',
        category: null
    },
    {
        id: '2',
        title: 'Quiz 2',
        icon: '/path/to/icon2.png',
        iconBgHex: '#00ff00',
        category: null
    },
];

describe('QuizList', () => {
    beforeEach(() => {
        (fetchQuizzesByLanguage as jest.Mock).mockResolvedValue(mockQuizzes);
    });

    it('renders a list of quizzes', async () => {
        await act(async () => {
            const Result = await QuizList();
            render(Result);
        });

        const quizItems = await screen.findAllByRole('listitem');
        expect(quizItems).toHaveLength(mockQuizzes.length);
    });

    it('renders quiz titles correctly', async () => {
        await act(async () => {
            const Result = await QuizList();
            render(Result);
        });

        for (const quiz of mockQuizzes) {
            expect(await screen.findByText(quiz.title)).toBeInTheDocument();
        }
    });

    it('renders quiz icons correctly', async () => {
        await act(async () => {
            const Result = await QuizList();
            render(Result);
        });

        for (const quiz of mockQuizzes) {
            const icon = await screen.findByAltText(quiz.title);
            //expect(icon).toHaveAttribute('src', expect.stringContaining(quiz.icon));
            expect(icon).toHaveStyle(`background-color: ${quiz.iconBgHex}`);
        }
    });

    it('renders buttons with correct href', async () => {
        await act(async () => {
            const Result = await QuizList();
            render(Result);
        });

        for (const quiz of mockQuizzes) {
            const button = await screen.findByRole('link', { name: quiz.title });
            expect(button).toHaveAttribute('href', `/quiz/${quiz.id}`);
        }
    });
});
