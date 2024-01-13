import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '../../utils';
import { Dialog, DialogContent } from './dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'ue-flex ue-h-full ue-w-full ue-flex-col ue-overflow-hidden ue-rounded-md ue-bg-popover ue-text-popover-foreground',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="ueoverflow-hidden ue-p-0">
        <Command className="[&_[cmdk-group-heading]]:uepx-2 [&_[cmdk-group-heading]]:uefont-medium [&_[cmdk-group-heading]]:uetext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:uept-0 [&_[cmdk-group]]:uepx-2 [&_[cmdk-input-wrapper]_svg]:ueh-5 [&_[cmdk-input-wrapper]_svg]:uew-5 [&_[cmdk-input]]:ueh-12 [&_[cmdk-item]]:uepx-2 [&_[cmdk-item]]:uepy-3 [&_[cmdk-item]_svg]:ueh-5 [&_[cmdk-item]_svg]:uew-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="ueflex ue-items-center ue-border-b ue-px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="uemr-2 ue-h-4 ue-w-4 ue-shrink-0 ue-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'ue-flex ue-h-10 ue-w-full ue-rounded-md ue-bg-transparent ue-py-3 ue-text-sm ue-outline-none placeholder:uetext-muted-foreground disabled:uecursor-not-allowed disabled:ueopacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('ue-max-h-[300px] ue-overflow-y-auto ue-overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="uepy-6 ue-text-center ue-text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'ue-overflow-hidden ue-p-1 ue-text-foreground [&_[cmdk-group-heading]]:uepx-2 [&_[cmdk-group-heading]]:uepy-1.5 [&_[cmdk-group-heading]]:uetext-xs [&_[cmdk-group-heading]]:uefont-medium [&_[cmdk-group-heading]]:uetext-muted-foreground',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn('ue--mx-1 ue-h-px ue-bg-border', className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'ue-relative ue-flex ue-cursor-default ue-select-none ue-items-center ue-rounded-sm ue-px-2 ue-py-1.5 ue-text-sm ue-outline-none aria-selected:uebg-accent aria-selected:uetext-accent-foreground data-[disabled]:uepointer-events-none data-[disabled]:ueopacity-50',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn('ue-ml-auto ue-text-xs ue-tracking-widest ue-text-muted-foreground', className)} {...props} />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
