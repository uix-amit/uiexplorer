'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const buttonVariants = cva(
  'ue-inline-flex ue-items-center ue-justify-center ue-whitespace-nowrap ue-rounded-md ue-text-sm ue-font-medium ue-transition-colors focus-visible:ue-outline-none focus-visible:ue-ring-1 focus-visible:ue-ring-ring disabled:ue-pointer-events-none disabled:ue-opacity-50 ue-font-Roboto !ue-font-bold',
  {
    variants: {
      variant: {
        default: 'ue-bg-primary ue-text-primary-foreground ue-shadow hover:ue-bg-primary/90',
        destructive:
          'ue-bg-destructive ue-text-destructive-foreground ue-shadow-sm hover:ue-bg-destructive/90',
        outline:
          'ue-border ue-border-input ue-bg-background ue-shadow-sm hover:ue-bg-accent hover:ue-text-accent-foreground',
        secondary:
          'ue-bg-secondary ue-text-secondary-foreground ue-shadow-sm hover:ue-bg-secondary/80',
        ghost: 'hover:ue-bg-accent hover:ue-text-accent-foreground',
        link: 'ue-text-primary ue-underline-offset-4 hover:ue-underline',
      },
      size: {
        default: 'ue-h-9 ue-px-4 ue-py-2',
        sm: 'ue-h-8 ue-rounded-md ue-px-3 ue-text-xs',
        lg: 'ue-h-10 ue-rounded-md ue-px-8',
        icon: 'ue-h-9 ue-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
