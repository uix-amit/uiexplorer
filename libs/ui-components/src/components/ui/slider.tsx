'use client';
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '../../utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('ue-relative ue-flex ue-w-full ue-touch-none ue-select-none ue-items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="uerelative ue-h-1.5 ue-w-full ue-grow ue-overflow-hidden ue-rounded-full ue-bg-primary/20">
      <SliderPrimitive.Range className="ueabsolute ue-h-full ue-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="ueblock ue-h-4 ue-w-4 ue-rounded-full ue-border ue-border-primary/50 ue-bg-background ue-shadow ue-transition-colors focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uepointer-events-none disabled:ueopacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
