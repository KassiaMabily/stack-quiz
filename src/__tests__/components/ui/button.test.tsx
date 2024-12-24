import { Button } from '@/components/ui/button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies default variant and size classes', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass('flex text-start items-center justify-start bg-secondary space-x-8');
        expect(button).toHaveClass('min-h-10 px-4 py-2');
    });

    it('applies variant and size classes', () => {
        render(<Button variant="outline" size="lg">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass('border border-input bg-background hover:bg-accent hover:text-accent-foreground');
        expect(button).toHaveClass('min-h-11 px-8 py-5');
    });

    it('applies additional class names', () => {
        render(<Button className="custom-class">Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass('custom-class');
    });

    it('applies transition and hover opacity classes', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByText('Click me');
        expect(button).toHaveClass('transition-opacity duration-300 ease-out opacity-100 hover:opacity-50');
    });
});
