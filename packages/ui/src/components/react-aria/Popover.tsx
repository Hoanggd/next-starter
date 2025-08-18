import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
  PopoverContext,
  useSlottedContext,
} from 'react-aria-components'
import React from 'react'
import { tv } from 'tailwind-variants'

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  showArrow?: boolean
  children: React.ReactNode
}

const styles = tv({
  base: 'rounded-2xl border bg-white p-4 shadow-popover',
  variants: {
    isEntering: {
      true: 'animate-in fade-in data-[placement=bottom]:slide-in-from-top-1 data-[placement=top]:slide-in-from-bottom-1 data-[placement=left]:slide-in-from-right-1 data-[placement=right]:slide-in-from-left-1 ease-out duration-100',
    },
    isExiting: {
      true: 'animate-out fade-out data-[placement=bottom]:slide-out-to-top-1 data-[placement=top]:slide-out-to-bottom-1 data-[placement=left]:slide-out-to-right-1 data-[placement=right]:slide-out-to-left-1 ease-in duration-100',
    },
  },
})

export function Popover({ children, showArrow, className, ...props }: PopoverProps) {
  let popoverContext = useSlottedContext(PopoverContext)!
  let isSubmenu = popoverContext?.trigger === 'SubmenuTrigger'
  let offset = showArrow ? 12 : 4
  offset = isSubmenu ? offset - 6 : offset
  return (
    <AriaPopover
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) => styles({ ...renderProps, className }))}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-white dark:fill-[#1f1f21] forced-colors:fill-[Canvas] stroke-1 stroke-black/10 dark:stroke-gray-600 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaPopover>
  )
}
