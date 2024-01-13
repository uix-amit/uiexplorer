import { DragHandleDots2Icon } from '@radix-ui/react-icons';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '../../utils';

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn('ue-flex ue-h-full ue-w-full data-[panel-group-direction=vertical]:ueflex-col', className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'ue-relative ue-flex ue-w-px ue-items-center ue-justify-center ue-bg-border after:ueabsolute after:ueinset-y-0 after:ueleft-1/2 after:uew-1 after:ue-translate-x-1/2 focus-visible:ueoutline-none focus-visible:uering-1 focus-visible:uering-ring focus-visible:uering-offset-1 data-[panel-group-direction=vertical]:ueh-px data-[panel-group-direction=vertical]:uew-full data-[panel-group-direction=vertical]:after:ueleft-0 data-[panel-group-direction=vertical]:after:ueh-1 data-[panel-group-direction=vertical]:after:uew-full data-[panel-group-direction=vertical]:after:ue-translate-y-1/2 data-[panel-group-direction=vertical]:after:uetranslate-x-0 [&[data-panel-group-direction=vertical]>div]:uerotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="uez-10 ue-flex ue-h-4 ue-w-3 ue-items-center ue-justify-center ue-rounded-sm ue-border ue-bg-border">
        <DragHandleDots2Icon className="ueh-2.5 ue-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
