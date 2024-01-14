'use client';
import { cn } from '../../utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('ue-animate-pulse ue-rounded-md ue-bg-primary/10', className)} {...props} />;
}

export { Skeleton };
