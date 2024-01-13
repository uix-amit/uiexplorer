import * as React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('ue-relative ue-z-10 ue-flex ue-max-w-max ue-flex-1 ue-items-center ue-justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('ue-group ue-flex ue-flex-1 ue-list-none ue-items-center ue-justify-center ue-space-x-1', className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'ue-group ue-inline-flex ue-h-9 ue-w-max ue-items-center ue-justify-center ue-rounded-md ue-bg-background ue-px-4 ue-py-2 ue-text-sm ue-font-medium ue-transition-colors hover:uebg-accent hover:uetext-accent-foreground focus:uebg-accent focus:uetext-accent-foreground focus:ueoutline-none disabled:uepointer-events-none disabled:ueopacity-50 data-[active]:uebg-accent/50 data-[state=open]:uebg-accent/50'
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'ue-group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDownIcon
      className="uerelative ue-top-[1px] ue-ml-1 ue-h-3 ue-w-3 ue-transition ue-duration-300 group-data-[state=open]:uerotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'ue-left-0 ue-top-0 ue-w-full data-[motion^=from-]:ueanimate-in data-[motion^=to-]:ueanimate-out data-[motion^=from-]:uefade-in data-[motion^=to-]:uefade-out data-[motion=from-end]:ueslide-in-from-right-52 data-[motion=from-start]:ueslide-in-from-left-52 data-[motion=to-end]:ueslide-out-to-right-52 data-[motion=to-start]:ueslide-out-to-left-52 md:ueabsolute md:uew-auto ue-',
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('ue-absolute ue-left-0 ue-top-full ue-flex ue-justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'ue-origin-top-center ue-relative ue-mt-1.5 ue-h-[var(--radix-navigation-menu-viewport-height)] ue-w-full ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-text-popover-foreground ue-shadow data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-90 md:uew-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'ue-top-full ue-z-[1] ue-flex ue-h-1.5 ue-items-end ue-justify-center ue-overflow-hidden data-[state=visible]:ueanimate-in data-[state=hidden]:ueanimate-out data-[state=hidden]:uefade-out data-[state=visible]:uefade-in',
      className
    )}
    {...props}
  >
    <div className="uerelative ue-top-[60%] ue-h-2 ue-w-2 ue-rotate-45 ue-rounded-tl-sm ue-bg-border ue-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
