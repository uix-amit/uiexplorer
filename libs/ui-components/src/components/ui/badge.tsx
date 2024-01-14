'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const badgeVariants = cva(
  'ue-inline-flex ue-items-center ue-rounded-md ue-border ue-px-2.5 ue-py-0.5 ue-text-xs ue-font-semibold ue-transition-colors focus:ueoutline-none focus:uering-2 focus:uering-ring focus:uering-offset-2',
  {
    variants: {
      variant: {
        default: 'ue-border-transparent ue-bg-primary ue-text-primary-foreground ue-shadow hover:uebg-primary/80',
        secondary: 'ue-border-transparent ue-bg-secondary ue-text-secondary-foreground hover:uebg-secondary/80',
        destructive:
          'ue-border-transparent ue-bg-destructive ue-text-destructive-foreground ue-shadow hover:uebg-destructive/80',
        outline: 'ue-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
