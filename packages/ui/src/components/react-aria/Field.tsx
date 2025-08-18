import React from 'react'
import {
  FieldErrorProps,
  Group,
  GroupProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  TextProps,
  composeRenderProps,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './utils'

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge('text-sm text-gray-500 dark:text-gray-400 font-medium cursor-default w-fit', props.className)}
    />
  )
}

export function Description(props: TextProps) {
  return <Text {...props} slot="description" className={twMerge('text-sm text-gray-600', props.className)} />
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(props.className, 'text-sm text-red-600 forced-colors:text-[Mark]')}
    />
  )
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: 'hover:ring-gray-300',
      true: 'ring-2 ring-blue-500',
    },
    isInvalid: {
      true: 'border-red-500 dark:border-red-500 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-gray-700 forced-colors:border-[GrayText]',
    },
  },
})

export const fieldGroupStyles = tv({
  base: 'group flex h-9 w-full rounded-[10px] ring-1 ring-gray-200 ring-inset transition-[box-shadow] bg-transparent text-sm shadow-sm cursor-text bg-white',
  variants: fieldBorderStyles.variants,
})

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className }),
      )}
    />
  )
}

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'px-2.5 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 disabled:text-gray-200 dark:disabled:text-gray-600',
      )}
    />
  )
}
