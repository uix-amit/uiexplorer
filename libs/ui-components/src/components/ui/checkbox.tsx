import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '../../utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ue-peer ue-h-4 ue-w-4 ue-shrink-0 ue-rounded-sm ue-border ue-border-primary ue-shadow focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uecursor-not-allowed disabled:ueopacity-50 data-[state=checked]:uebg-primary data-[state=checked]:uetext-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('ue-flex ue-items-center ue-justify-center ue-text-current')}>
      <CheckIcon className="ueh-4 ue-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
