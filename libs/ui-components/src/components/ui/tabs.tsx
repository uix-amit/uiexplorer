'use client';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'ue-inline-flex ue-h-9 ue-items-center ue-justify-center ue-rounded-lg ue-bg-muted ue-p-1 ue-text-muted-foreground',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'ue-inline-flex ue-items-center ue-justify-center ue-whitespace-nowrap ue-rounded-md ue-px-3 ue-py-1 ue-text-sm ue-font-medium ue-ring-offset-background ue-transition-all focus-visible:ueoutline-none focus-visible:uering-2 focus-visible:uering-ring focus-visible:uering-offset-2 disabled:uepointer-events-none disabled:ueopacity-50 data-[state=active]:uebg-background data-[state=active]:uetext-foreground data-[state=active]:ueshadow',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ue-mt-2 ue-ring-offset-background focus-visible:ueoutline-none focus-visible:uering-2 focus-visible:uering-ring focus-visible:uering-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
