import * as React from 'react';

import { cn } from '../../utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'ue-flex ue-h-9 ue-w-full ue-rounded-md ue-border ue-border-input ue-bg-transparent ue-px-3 ue-py-1 ue-text-sm ue-shadow-sm ue-transition-colors file:ueborder-0 file:uebg-transparent file:uetext-sm file:uefont-medium placeholder:uetext-muted-foreground focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring disabled:uecursor-not-allowed disabled:ueopacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
