'use client';
import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

import { cn } from '../../utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-2 ue-py-1.5 ue-text-sm ue-outline-none focus:uebg-accent data-[state=open]:uebg-accent',
      inset && 'ue-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ueml-auto ue-h-4 ue-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'ue-z-50 ue-min-w-[8rem] ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-p-1 ue-text-popover-foreground ue-shadow-lg data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'ue-z-50 ue-min-w-[8rem] ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-p-1 ue-text-popover-foreground ue-shadow-md',
        'data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-2 ue-py-1.5 ue-text-sm ue-outline-none ue-transition-colors focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      inset && 'ue-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-py-1.5 ue-pl-8 ue-pr-2 ue-text-sm ue-outline-none ue-transition-colors focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="ueabsolute ue-left-2 ue-flex ue-h-3.5 ue-w-3.5 ue-items-center ue-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="ueh-4 ue-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-py-1.5 ue-pl-8 ue-pr-2 ue-text-sm ue-outline-none ue-transition-colors focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    {...props}
  >
    <span className="ueabsolute ue-left-2 ue-flex ue-h-3.5 ue-w-3.5 ue-items-center ue-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="ueh-4 ue-w-4 ue-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('ue-px-2 ue-py-1.5 ue-text-sm ue-font-semibold', inset && 'ue-pl-8', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('ue--mx-1 ue-my-1 ue-h-px ue-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ue-ml-auto ue-text-xs ue-tracking-widest ue-opacity-60', className)} {...props} />;
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
