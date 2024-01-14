'use client';
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '../../utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('ue-border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='ueflex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'ue-flex ue-flex-1 ue-items-center ue-justify-between ue-py-4 ue-text-sm ue-font-medium ue-transition-all hover:ueunderline [&[data-state=open]>svg]:uerotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className='ueh-4 ue-w-4 ue-shrink-0 ue-text-muted-foreground ue-transition-transform ue-duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='ueoverflow-hidden ue-text-sm data-[state=closed]:ueanimate-accordion-up data-[state=open]:ueanimate-accordion-down'
    {...props}
  >
    <div className={cn('ue-pb-4 ue-pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
