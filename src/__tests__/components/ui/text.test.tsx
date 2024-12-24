import { Text } from '@/components/ui/text';
import { render } from '@testing-library/react';

describe('Text component', () => {
    it('renders correctly with default variant', () => {
        const { container } = render(<Text>Default Text</Text>);
        expect(container.firstChild).toHaveClass('text-base text-navy-grey dark:text-bluish lg:text-xl');
    });

    it('renders correctly with bodyM variant', () => {
        const { container } = render(<Text variant="bodyM">BodyM Text</Text>);
        expect(container.firstChild).toHaveClass('text-lg lg:text-xl');
    });

    it('renders correctly with headingS variant', () => {
        const { container } = render(<Text variant="headingS">HeadingS Text</Text>);
        expect(container.firstChild).toHaveClass('text-xl lg:text-2xl font-medium');
    });

    it('renders correctly with headingM variant', () => {
        const { container } = render(<Text variant="headingM">HeadingM Text</Text>);
        expect(container.firstChild).toHaveClass('text-2xl lg:text-3xl font-medium text-navy-dark dark:text-white');
    });

    it('renders correctly with titleS variant', () => {
        const { container } = render(<Text variant="titleS">TitleS Text</Text>);
        expect(container.firstChild).toHaveClass('text-4xl lg:text-5xl text-navy-dark dark:text-white');
    });

    it('renders correctly with titleM variant', () => {
        const { container } = render(<Text variant="titleM">TitleM Text</Text>);
        expect(container.firstChild).toHaveClass('text-4xl lg:text-5xl font-medium text-navy-dark dark:text-white');
    });

    it('renders correctly with custom className', () => {
        const { container } = render(<Text className="custom-class">Custom Class Text</Text>);
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('renders correctly as a different element when asChild is true', () => {
        const { container } = render(<Text asChild>Slot Text</Text>);
        expect((container.firstChild as Element).tagName).toBe('SLOT');
    });
});
