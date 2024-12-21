import { Text } from '@/components/ui/text';
import { classNames, cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'flex text-start items-center justify-start bg-secondary space-x-8',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary: 'bg-primary text-primary-foreground',
      },
      size: {
        default: 'min-h-10 px-4 py-2',
        xs: 'min-h-7 px-2 text-xs',
        sm: 'min-h-9 px-3',
        md: 'min-h-10 p-5',
        lg: 'min-h-11 px-8 py-5',
        icon: 'min-h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    href?: string;
  };

function Button({
  children,
  href,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn("", buttonVariants({ variant, size, className }))}
        prefetch={true}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(buttonVariants({ variant, size, className}), "transition-opacity duration-300 ease-out opacity-100 hover:opacity-50")}
      {...rest}
    >
      {children}
    </button>
  );
}

type IconProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

function Icon({ src, alt, className, ...rest }: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={56}
      height={56}
      className={classNames('h-14 w-14 rounded-lg p-2', className ?? '')}
      {...rest}
    />
  );
}

Button.Icon = Icon;
Button.Text = Text;

export { Button, buttonVariants };
