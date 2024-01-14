'use client';
import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const toggleVariants = cva(
  'ue-inline-flex ue-items-center ue-justify-center ue-rounded-md ue-text-sm ue-font-medium ue-transition-colors hover:uebg-muted hover:uetext-muted-foreground focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uepointer-events-none disabled:ueopacity-50 data-[state=on]:uebg-accent data-[state=on]:uetext-accent-foreground',
  {
    variants: {
      variant: {
        default: 'ue-bg-transparent',
        outline:
          'ue-border ue-border-input ue-bg-transparent ue-shadow-sm hover:uebg-accent hover:uetext-accent-foreground',
      },
      size: {
        default: 'ue-h-9 ue-px-3',
        sm: 'ue-h-8 ue-px-2',
        lg: 'ue-h-10 ue-px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
