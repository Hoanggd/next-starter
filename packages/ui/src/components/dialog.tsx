"use client"

import * as React from "react"
import { X } from "lucide-react"
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "./button"


const Dialog = AriaDialog

const DialogTrigger = AriaDialogTrigger

const DialogOverlay = ({
  className,
  isDismissable = true,
  ...props
}: AriaModalOverlayProps) => (
  <AriaModalOverlay
    isDismissable={isDismissable}
    className={composeRenderProps(className, (className) =>
      cn(
        "fixed inset-0 z-50 bg-black/70",
        /* Exiting */
        "data-[exiting]:animate-out max-md:data-[exiting]:duration-300 data-[exiting]:fade-out-0",
        /* Entering */
        "data-[entering]:animate-in max-md:data-[entering]:duration-300 data-[entering]:fade-in-0",
        className
      )
    )}
    {...props}
  />
)

interface DialogContentProps
  extends Omit<React.ComponentProps<typeof AriaModal>, "children"> {
  children?: AriaDialogProps["children"]
  role?: AriaDialogProps["role"]
  closeButton?: boolean
}

const DialogContent = ({
  className,
  children,
  role,
  closeButton = true,
  ...props
}: DialogContentProps) => (
  <AriaModal
    className={composeRenderProps(className, (className) =>
      cn(
        "fixed left-[50vw] top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-background p-6 shadow-2xl max-w-lg w-full rounded-xl dark:border max-md:max-w-svw max-md:w-svw max-md:h-svh max-md:rounded-none",
        "data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0",
        "md:data-[entering]:zoom-in-97 md:data-[exiting]:zoom-out-97",
        "max-md:data-[entering]:duration-300 max-md:data-[exiting]:duration-300 max-md:data-[entering]:slide-in-from-bottom-1/2 max-md:data-[exiting]:slide-out-to-bottom-1/2",
        className
      )
    )}
    {...props}
  >
    <AriaDialog
      role={role}
      className={cn("grid h-full gap-4", "h-full outline-none")}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          {closeButton && (
            <Button
              onClick={renderProps.close}
              size="icon"
              variant="ghost"
              className="absolute right-4 top-4"
            >
              <X className="size-5! text-muted-foreground" />
              <span className="sr-only">Close</span>
            </Button>
          )}
        </>
      ))}
    </AriaDialog>
  </AriaModal>
)

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)

const DialogTitle = ({ className, ...props }: AriaHeadingProps) => (
  <AriaHeading
    slot="title"
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
)

const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

export {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
}
export type { DialogContentProps }
