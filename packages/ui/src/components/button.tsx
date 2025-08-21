"use client"

import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components"

import { cn } from "@workspace/ui/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center gap-1 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all",
    "data-[hovered]:opacity-90 data-[pressed]:opacity-100",
    /* SVGs */
    '[&_svg]:pointer-events-none [&_svg]:size-[14px] [&_svg]:shrink-0 [&_svg]:stroke-[2.5]',
    /* Disabled */
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
    /* Focus Visible */
    "focus-ring-button",
    /* Resets */
    "focus-visible:outline-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-b from-primary/90 to-primary text-primary-foreground button-3d",
        destructive:
          "bg-linear-to-b from-destructive/90 to-destructive text-white button-3d",
        outline:
          "bg-linear-to-b fromt-white to-neutral-50 shadow-sm border border-input",
        secondary:
          "bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80",
        ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[pressed]:bg-accent/50",
        link: "text-primary underline-offset-4 data-[hovered]:underline px-0! py-0! h-auto!",
        unstyled: "",
      },
      size: {
        default: "h-8 px-3 py-2",
        sm: "h-7 px-2",
        lg: "h-9 px-6",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
