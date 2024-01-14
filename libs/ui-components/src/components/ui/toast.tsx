'use client';
import * as React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'ue-fixed ue-top-0 ue-z-[100] ue-flex ue-max-h-screen ue-w-full ue-flex-col-reverse ue-p-4 sm:uebottom-0 sm:ueright-0 sm:uetop-auto sm:ueflex-col md:uemax-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'ue-group ue-pointer-events-auto ue-relative ue-flex ue-w-full ue-items-center ue-justify-between ue-space-x-2 ue-overflow-hidden ue-rounded-md ue-border ue-p-4 ue-pr-6 ue-shadow-lg ue-transition-all data-[swipe=cancel]:uetranslate-x-0 data-[swipe=end]:uetranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:uetranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:uetransition-none data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[swipe=end]:ueanimate-out data-[state=closed]:uefade-out-80 data-[state=closed]:ueslide-out-to-right-full data-[state=open]:ueslide-in-from-top-full data-[state=open]:sm:ueslide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'ue-border ue-bg-background ue-text-foreground',
        destructive: 'ue-destructive ue-group ue-border-destructive ue-bg-destructive ue-text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'ue-inline-flex ue-h-8 ue-shrink-0 ue-items-center ue-justify-center ue-rounded-md ue-border ue-bg-transparent ue-px-3 ue-text-sm ue-font-medium ue-transition-colors hover:uebg-secondary focus:ueoutline-none focus:uering-1 focus:uering-ring disabled:uepointer-events-none disabled:ueopacity-50 group-[.destructive]:ueborder-muted/40 group-[.destructive]:hover:ueborder-destructive/30 group-[.destructive]:hover:uebg-destructive group-[.destructive]:hover:uetext-destructive-foreground group-[.destructive]:focus:uering-destructive',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'ue-absolute ue-right-1 ue-top-1 ue-rounded-md ue-p-1 ue-text-foreground/50 ue-opacity-0 ue-transition-opacity hover:uetext-foreground focus:ueopacity-100 focus:ueoutline-none focus:uering-1 group-hover:ueopacity-100 group-[.destructive]:uetext-red-300 group-[.destructive]:hover:uetext-red-50 group-[.destructive]:focus:uering-red-400 group-[.destructive]:focus:uering-offset-red-600',
      className
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="ueh-4 ue-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('ue-text-sm ue-font-semibold [&+div]:uetext-xs', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn('ue-text-sm ue-opacity-90', className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
