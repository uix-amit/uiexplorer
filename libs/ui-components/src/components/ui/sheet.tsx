import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'ue-fixed ue-inset-0 ue-z-50 ue-bg-black/80 ue- data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:uefade-out-0 data-[state=open]:uefade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'ue-fixed ue-z-50 ue-gap-4 ue-bg-background ue-p-6 ue-shadow-lg ue-transition ue-ease-in-out data-[state=open]:ueanimate-in data-[state=closed]:ueanimate-out data-[state=closed]:ueduration-300 data-[state=open]:ueduration-500',
  {
    variants: {
      side: {
        top: 'ue-inset-x-0 ue-top-0 ue-border-b data-[state=closed]:ueslide-out-to-top data-[state=open]:ueslide-in-from-top',
        bottom:
          'ue-inset-x-0 ue-bottom-0 ue-border-t data-[state=closed]:ueslide-out-to-bottom data-[state=open]:ueslide-in-from-bottom',
        left: 'ue-inset-y-0 ue-left-0 ue-h-full ue-w-3/4 ue-border-r data-[state=closed]:ueslide-out-to-left data-[state=open]:ueslide-in-from-left sm:uemax-w-sm',
        right:
          'ue-inset-y-0 ue-right-0 ue-h-full ue-w-3/4 ue-border-l data-[state=closed]:ueslide-out-to-right data-[state=open]:ueslide-in-from-right sm:uemax-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="ueabsolute ue-right-4 ue-top-4 ue-rounded-sm ue-opacity-70 ue-ring-offset-background ue-transition-opacity hover:ueopacity-100 focus:ueoutline-none focus:uering-2 focus:uering-ring focus:uering-offset-2 disabled:uepointer-events-none data-[state=open]:uebg-secondary">
          <Cross2Icon className="ueh-4 ue-w-4" />
          <span className="uesr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('ue-flex ue-flex-col ue-space-y-2 ue-text-center sm:uetext-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('ue-flex ue-flex-col-reverse sm:ueflex-row sm:uejustify-end sm:uespace-x-2', className)}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('ue-text-lg ue-font-semibold ue-text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn('ue-text-sm ue-text-muted-foreground', className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
