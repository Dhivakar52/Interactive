"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "./utils";

export function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <form>
      <div className="flex items-center">
        
        <SwitchPrimitive.Root
          id="airplane-mode"
          className={cn(
            "relative h-[25px] w-[42px] cursor-pointer rounded-full shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px]  transition-colors",
            "data-[state=unchecked]:bg-black data-[state=checked]:bg-[#2563EB]",
            className
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-150 will-change-transform",
              "data-[state=checked]:translate-x-[19px]"
            )}
          />
        </SwitchPrimitive.Root>
      </div>
    </form>
  );
}