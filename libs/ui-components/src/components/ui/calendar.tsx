import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../utils';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('ue-p-3', className)}
      classNames={{
        months: 'ue-flex ue-flex-col sm:ueflex-row ue-space-y-4 sm:uespace-x-4 sm:uespace-y-0',
        month: 'ue-space-y-4',
        caption: 'ue-flex ue-justify-center ue-pt-1 ue-relative ue-items-center',
        caption_label: 'ue-text-sm ue-font-medium',
        nav: 'ue-space-x-1 ue-flex ue-items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'ue-h-7 ue-w-7 ue-bg-transparent ue-p-0 ue-opacity-50 hover:ueopacity-100'
        ),
        nav_button_previous: 'ue-absolute ue-left-1',
        nav_button_next: 'ue-absolute ue-right-1',
        table: 'ue-w-full ue-border-collapse ue-space-y-1',
        head_row: 'ue-flex',
        head_cell: 'ue-text-muted-foreground ue-rounded-md ue-w-8 ue-font-normal ue-text-[0.8rem]',
        row: 'ue-flex ue-w-full ue-mt-2',
        cell: cn(
          'ue-relative ue-p-0 ue-text-center ue-text-sm focus-within:uerelative focus-within:uez-20 [&:has([aria-selected])]:uebg-accent [&:has([aria-selected].day-outside)]:uebg-accent/50 [&:has([aria-selected].day-range-end)]:uerounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:uerounded-r-md [&:has(>.day-range-start)]:uerounded-l-md first:[&:has([aria-selected])]:uerounded-l-md last:[&:has([aria-selected])]:uerounded-r-md'
            : '[&:has([aria-selected])]:uerounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'ue-h-8 ue-w-8 ue-p-0 ue-font-normal aria-selected:ueopacity-100'
        ),
        day_range_start: 'ue-day-range-start',
        day_range_end: 'ue-day-range-end',
        day_selected:
          'ue-bg-primary ue-text-primary-foreground hover:uebg-primary hover:uetext-primary-foreground focus:uebg-primary focus:uetext-primary-foreground',
        day_today: 'ue-bg-accent ue-text-accent-foreground',
        day_outside:
          'ue-day-outside ue-text-muted-foreground ue-opacity-50 ue- aria-selected:uebg-accent/50 aria-selected:uetext-muted-foreground aria-selected:ueopacity-30',
        day_disabled: 'ue-text-muted-foreground ue-opacity-50',
        day_range_middle: 'aria-selected:uebg-accent aria-selected:uetext-accent-foreground',
        day_hidden: 'ue-invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="ueh-4 ue-w-4" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="ueh-4 ue-w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
