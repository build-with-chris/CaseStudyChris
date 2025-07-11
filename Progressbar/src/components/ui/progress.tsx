import postIcon from "@/assets/post-svgrepo-com.svg";
import presentIcon from "@/assets/present-svgrepo-com.svg";
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
import PresentIcon from "../icons/PresenetIcon";
import PostIcon from "../icons/PostIcon";

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
        "bg-primary/20 relative h-10 w-full overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      {/* Truck Icon bei 25€ */}
      <PostIcon
        className={`absolute left-1/2 top-0 w-15 h-15 transform -translate-x-1/2 z-10 ${
          cartValue >= 25 ? "fill-green-600" : "fill-gray-400"
        }`}
      />

      {/* Geschenk Icon bei 100% */}
      <PresentIcon
        className={`absolute right-[1.5%] top-0 w-9 h-9 transform translate-x-1/2 z-10 ${
          cartValue >= 75 ? "fill-green-600" : "fill-gray-400"
        }`}
      />
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-[#002F6C] h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
