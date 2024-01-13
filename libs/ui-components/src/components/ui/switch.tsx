import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '../../utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'ue-peer ue-inline-flex ue-h-5 ue-w-9 ue-shrink-0 ue-cursor-pointer ue-items-center ue-rounded-full ue-border-2 ue-border-transparent ue-shadow-sm ue-transition-colors focus-visible:ueoutline-none focus-visible:uering-2 focus-visible:uering-ring focus-visible:uering-offset-2 focus-visible:uering-offset-background disabled:uecursor-not-allowed disabled:ueopacity-50 data-[state=checked]:uebg-primary data-[state=unchecked]:uebg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'ue-pointer-events-none ue-block ue-h-4 ue-w-4 ue-rounded-full ue-bg-background ue-shadow-lg ue-ring-0 ue-transition-transform data-[state=checked]:uetranslate-x-4 data-[state=unchecked]:uetranslate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
