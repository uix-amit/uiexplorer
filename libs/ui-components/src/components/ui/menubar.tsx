'use client';
import * as React from 'react';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

import { cn } from '../../utils';

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'ue-flex ue-h-9 ue-items-center ue-space-x-1 ue-rounded-md ue-border ue-bg-background ue-p-1 ue-shadow-sm',
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-3 ue-py-1 ue-text-sm ue-font-medium ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[state=open]:uebg-accent data-[state=open]:uetext-accent-foreground',
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-2 ue-py-1.5 ue-text-sm ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[state=open]:uebg-accent data-[state=open]:uetext-accent-foreground',
      inset && 'ue-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ueml-auto ue-h-4 ue-w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'ue-z-50 ue-min-w-[8rem] ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-p-1 ue-text-popover-foreground ue-shadow-lg data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'ue-z-50 ue-min-w-[12rem] ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-p-1 ue-text-popover-foreground ue-shadow-md data-[state=open]:ueanimate-in data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-2 ue-py-1.5 ue-text-sm ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      inset && 'ue-pl-8',
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-py-1.5 ue-pl-8 ue-pr-2 ue-text-sm ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="ueabsolute ue-left-2 ue-flex ue-h-3.5 ue-w-3.5 ue-items-center ue-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="ueh-4 ue-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-py-1.5 ue-pl-8 ue-pr-2 ue-text-sm ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    {...props}
  >
    <span className="ueabsolute ue-left-2 ue-flex ue-h-3.5 ue-w-3.5 ue-items-center ue-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="ueh-4 ue-w-4 ue-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn('ue-px-2 ue-py-1.5 ue-text-sm ue-font-semibold', inset && 'ue-pl-8', className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn('ue--mx-1 ue-my-1 ue-h-px ue-bg-muted', className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn('ue-ml-auto ue-text-xs ue-tracking-widest ue-text-muted-foreground', className)} {...props} />
  );
};
MenubarShortcut.displayname = 'MenubarShortcut';

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
