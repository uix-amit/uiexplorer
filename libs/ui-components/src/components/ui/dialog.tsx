import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { cn } from '../../utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'ue-fixed ue-inset-0 ue-z-50 ue-bg-black/80 ue- data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ue-fixed ue-left-[50%] ue-top-[50%] ue-z-50 ue-grid ue-w-full ue-max-w-lg ue-translate-x-[-50%] ue-translate-y-[-50%] ue-gap-4 ue-border ue-bg-background ue-p-6 ue-shadow-lg ue-duration-200 data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0 data-[state=closed]:uezoom-out-95 data-[state=open]:uezoom-in-95 data-[state=closed]:ueslide-out-to-left-1/2 data-[state=closed]:ueslide-out-to-top-[48%] data-[state=open]:ueslide-in-from-left-1/2 data-[state=open]:ueslide-in-from-top-[48%] sm:uerounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="ueabsolute ue-right-4 ue-top-4 ue-rounded-sm ue-opacity-70 ue-ring-offset-background ue-transition-opacity hover:ueopacity-100 focus:ueoutline-none focus:uering-2 focus:uering-ring focus:uering-offset-2 disabled:uepointer-events-none data-[state=open]:uebg-accent data-[state=open]:uetext-muted-foreground">
        <Cross2Icon className="ueh-4 ue-w-4" />
        <span className="uesr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('ue-flex ue-flex-col ue-space-y-1.5 ue-text-center sm:uetext-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('ue-flex ue-flex-col-reverse sm:ueflex-row sm:uejustify-end sm:uespace-x-2', className)}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('ue-text-lg ue-font-semibold ue-leading-none ue-tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('ue-text-sm ue-text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
