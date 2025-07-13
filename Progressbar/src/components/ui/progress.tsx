
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  cartValue,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { cartValue: number }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-5 w-full overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
     
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`${cartValue >= 25 ? "bg-green-600" : "bg-[#002F6C]"} h-full w-full flex-1 transition-all`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
