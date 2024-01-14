'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const alertVariants = cva(
  'ue-relative ue-w-full ue-rounded-lg ue-border ue-px-4 ue-py-3 ue-text-sm [&>svg+div]:uetranslate-y-[-3px] [&>svg]:ueabsolute [&>svg]:ueleft-4 [&>svg]:uetop-4 [&>svg]:uetext-foreground [&>svg~*]:uepl-7',
  {
    variants: {
      variant: {
        default: 'ue-bg-background ue-text-foreground',
        destructive:
          'ue-border-destructive/50 ue-text-destructive dark:ueborder-destructive [&>svg]:uetext-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h5 ref={ref} className={cn('ue-mb-1 ue-font-medium ue-leading-none ue-tracking-tight', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('ue-text-sm [&_p]:ueleading-relaxed', className)} {...props} />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
