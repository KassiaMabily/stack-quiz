import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-base text-navy-grey dark:text-bluish lg:text-xl',
      bodyM: 'text-lg lg:text-xl',
      headingS:
        'text-xl lg:text-2xl font-medium',
      headingM:
        'text-2xl lg:text-3xl font-medium text-navy-dark dark:text-white',
      titleS: 'text-4xl lg:text-5xl text-navy-dark dark:text-white',
      titleM: 'text-4xl lg:text-5xl font-medium text-navy-dark dark:text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TextProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  };

function Text({ children, variant, className, asChild = false, ...rest }: TextProps) {
  const Comp = asChild ? "slot" : "span"

  return (
    <Comp className={cn(textVariants({ variant, className }))} {...rest}>
      {children}
    </Comp>
  );
}

export { Text, textVariants };
