'use client';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'ue-z-50 ue-overflow-hidden ue-rounded-md ue-bg-primary ue-px-3 ue-py-1.5 ue-text-xs ue-text-primary-foreground ue-animate-in ue-fade-in-0 ue-zoom-in-95 data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=closed]:uezoom-out-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
