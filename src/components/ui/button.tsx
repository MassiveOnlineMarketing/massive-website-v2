import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import "../../app/globals.css"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-lg  inline-flex items-center justify-center whitespace-nowrap w-fit h-fit",
  // text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300
  {
    defaultVariants: {
      variant: "primary",
      size: "md",
      // size: "default",
    },
    variants: {
      variant: {
        primary: "text-gray-50 primary-button relative    ",
        //bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        secondary:"bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",

        light: 'border border-gray-200 text-gray-600 hover:shadow-base hover:border-none hover:-translate-y-[1px] hover:mb-[1px] transition-transform duration-100',
        dark: 'text-gray-50 bg-gradient-to-b from-[#1F2937]/60 to-[#1F2937]/50 dark-border-gradient relative',
        flat: 'text-gray-50 bg-gray-800 hover:bg-gray-700',
        text: 'text-gray-800 hover:text-primary',
        disabled: 'text-gray-400 bg-gray-200 cursor-not-allowed',
        
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        nav: 'py-[6px] px-4 rounded-full border border-[#000]/10  shadow-md bg-[#fff]/50 transition-all duration-500 hover:shadow-none hover:border-transparent hover:bg-[#fff]/0',
        outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        icon: 'p-4'
        // bg-gradient-to-b from-[#fff]/60 to-[#fff]/50
      },
      size: {
        xs: "px-[12px] py-[6px] text-xs font-medium leading-4 gap-[4px]",
        sm: "px-[16px] py-[8px] text-sm font-medium leading-5 gap-[6px]",
        md: "px-[24px] py-[12px] text-base font-semibold leading-6 gap-[8px]",
        lg: "px-[32px] py-[14px] text-base font-semibold leading-6 gap-[12px]",
      },
      option: {
        icon: "items-center p-4",
        rounded: "rounded-full",
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, option , asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, option,  className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
