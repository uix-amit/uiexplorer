import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '../../utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'ue-z-50 ue-w-72 ue-rounded-md ue-border ue-bg-popover ue-p-4 ue-text-popover-foreground ue-shadow-md ue-outline-none data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
