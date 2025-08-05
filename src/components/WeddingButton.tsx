import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface WeddingButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  variant?: 'wedding' | 'wedding-light';
  letterSpacing?: string;
  expandOnHover?: boolean;
}

const WeddingButton: React.FC<WeddingButtonProps> = ({
  children,
  variant = 'wedding',
  letterSpacing = '2px',
  expandOnHover = true,
  className,
  style,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size="xl"
      className={cn('rounded-none cursor-pointer', className)}
      style={{
        letterSpacing,
        ...style,
      }}
      {...props}
    >
      <span
        className={
          expandOnHover
            ? 'group-hover:tracking-widest transition-all duration-300'
            : undefined
        }
      >
        {children}
      </span>
    </Button>
  );
};

export default WeddingButton;
