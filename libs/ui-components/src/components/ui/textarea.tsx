'use client';
import * as React from 'react';

import { cn } from '../../utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'ue-flex ue-min-h-[60px] ue-w-full ue-rounded-md ue-border ue-border-input ue-bg-transparent ue-px-3 ue-py-2 ue-text-sm ue-shadow-sm placeholder:uetext-muted-foreground focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uecursor-not-allowed disabled:ueopacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
