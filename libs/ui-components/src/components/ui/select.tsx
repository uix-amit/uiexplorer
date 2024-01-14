'use client';
import * as React from 'react';
import { CaretSortIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'ue-flex ue-h-9 ue-w-full ue-items-center ue-justify-between ue-whitespace-nowrap ue-rounded-md ue-border ue-border-input ue-bg-transparent ue-px-3 ue-py-2 ue-text-sm ue-shadow-sm ue-ring-offset-background placeholder:uetext-muted-foreground focus:ueoutline-none focus:uering-1 focus:uering-ring disabled:uecursor-not-allowed disabled:ueopacity-50 [&>span]:ueline-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="ueh-4 ue-w-4 ue-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('ue-flex ue-cursor-default ue-items-center ue-justify-center ue-py-1', className)}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('ue-flex ue-cursor-default ue-items-center ue-justify-center ue-py-1', className)}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'ue-relative ue-z-50 ue-max-h-96 ue-min-w-[8rem] ue-overflow-hidden ue-rounded-md ue-border ue-bg-popover ue-text-popover-foreground ue-shadow-md data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[side=bottom]:ueslide-in-from-top-2 data-[side=left]:ueslide-in-from-right-2 data-[side=right]:ueslide-in-from-left-2 data-[side=top]:ueslide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:uetranslate-y-1 data-[side=left]:ue-translate-x-1 data-[side=right]:uetranslate-x-1 data-[side=top]:ue-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'ue-p-1',
          position === 'popper' &&
            'ue-h-[var(--radix-select-trigger-height)] ue-w-full ue-min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('ue-px-2 ue-py-1.5 ue-text-sm ue-font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-w-full ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-py-1.5 ue-pl-2 ue-pr-8 ue-text-sm ue-outline-none focus:uebg-accent focus:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    {...props}
  >
    <span className="ueabsolute ue-right-2 ue-flex ue-h-3.5 ue-w-3.5 ue-items-center ue-justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="ueh-4 ue-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn('ue--mx-1 ue-my-1 ue-h-px ue-bg-muted', className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
