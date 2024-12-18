import { cn } from '@/lib/utils';
import Image from 'next/image';

type IconProps = {
  name:
    | 'correct'
    | 'incorrect'
    | 'error'
    | 'moon-dark'
    | 'moon-light'
    | 'sun-light'
    | 'sun-dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
};

export function Icon({ name, size = "md", className }: IconProps) {
  const sizes = {
    'sm': "h-4 w-4",
    'md': "h-6 w-6",
    'lg': "h-8 w-8",
    'xl': "h-10 w-10",
    '2xl': "h-12 w-12",
    '3xl': "h-14 w-14",
  };

  return (
    <Image
      src={`/icons/icon-${name}.svg`}
      key={`icon-${name}`}
      alt={name}
      width={48}
      height={48}
      className={cn(sizes[size], className)}
    />
  );
}
