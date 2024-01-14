'use client';
import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('ue-grid ue-gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'ue-aspect-square ue-h-4 ue-w-4 ue-rounded-full ue-border ue-border-primary ue-text-primary ue-shadow focus:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uecursor-not-allowed disabled:ueopacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="ueflex ue-items-center ue-justify-center">
        <CheckIcon className="ueh-3.5 ue-w-3.5 ue-fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
