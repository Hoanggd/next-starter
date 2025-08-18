'use client'

import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react'
import React, { useId } from 'react'
import ReactSelect, { components as RcComponents, Props as ReactSelectProps } from 'react-select'
import { z } from '@workspace/ui/lib/zod'
import { cn } from '@workspace/ui/lib/utils'

export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
})

export type Option = z.infer<typeof optionSchema>

function Select<S extends Option>({
  'aria-invalid': ariaInvalid,
  renderOption,
  renderMultiValueLabel,
  renderSingleValue,
  components,
  disabled,
  isDisabled,
  ...props
}: ReactSelectProps & {
  options: S[]
  ['aria-invalid']?: boolean
  renderOption?: (data: S) => React.ReactNode
  renderMultiValueLabel?: (data: S) => React.ReactNode
  renderSingleValue?: (data: S) => React.ReactNode
  disabled?: boolean
}) {
  const id = useId()

  return (
    <div>
      <ReactSelect
        instanceId={id}
        unstyled
        classNames={{
          multiValue: () =>
            'bg-blue-50 text-xs font-medium pl-2 rounded-full mr-1 my-0.5 flex items-center text-blue-600',
          multiValueRemove: () => 'w-5 h-5 ml-0.5 rounded-full flex justify-center cursor-default hover:bg-blue-100',
          control: (props) =>
            cn(
              'group flex !min-h-9 w-full rounded-[10px] transition-[box-shadow,colors] ring-1 ring-gray-200 ring-inset bg-white px-2.5 py-0.5 text-sm shadow-sm hover:ring-gray-300',
              props.isDisabled && 'cursor-not-allowed opacity-50',
              props.isFocused && 'ring-blue-500 hover:ring-blue-500 ring-2',
              ariaInvalid && 'ring-red-600',
            ),
          menu: () => 'select_menu rounded-2xl border bg-white/80 backdrop-blur-lg shadow-popover p-1 mt-1',
          menuList: () => 'menu_list',
          noOptionsMessage: () => 'text-sm text-gray-400 py-4',
          placeholder: () => 'text-gray-400',
        }}
        components={{
          Input: (props) => <RcComponents.Input {...props} suppressHydrationWarning />,
          SingleValue: (props) => (
            <RcComponents.SingleValue {...props}>
              {renderSingleValue?.(props.selectProps.value as S) || props.children}
            </RcComponents.SingleValue>
          ),
          Option: ({ children, ...props }) => (
            <RcComponents.Option
              {...props}
              className={cn(
                'px-2 py-1.5 rounded-[10px]',
                props.isDisabled && 'opacity-50',
                props.isFocused && 'bg-blue-600 text-white',
              )}
            >
              <div className="flex items-center gap-1 text-sm">
                <div className="flex-shrink-0 w-[14px]">
                  {props.isSelected && <CheckIcon className="w-[14px] h-[14px]" strokeWidth={2.5} />}
                </div>
                <div className="flex-1">{renderOption?.(props.data as S) || children}</div>
              </div>
            </RcComponents.Option>
          ),
          MultiValueRemove: (props) => (
            <RcComponents.MultiValueRemove {...props}>
              <XIcon className="w-3 h-3" />
            </RcComponents.MultiValueRemove>
          ),
          MultiValueLabel: (props) => (
            <RcComponents.MultiValueLabel {...props}>
              {renderMultiValueLabel?.(props.data) || props.children}
            </RcComponents.MultiValueLabel>
          ),
          ClearIndicator: (props) => (
            <RcComponents.ClearIndicator
              {...props}
              className="w-5 h-5 bg-white text-gray-400 rounded-full flex items-center justify-center transition-all hover:bg-gray-100"
            >
              <XIcon className="w-4 h-4" />
            </RcComponents.ClearIndicator>
          ),
          DropdownIndicator: (props) => (
            <RcComponents.DropdownIndicator {...props}>
              <ChevronDownIcon className={cn('w-4 h-4 text-gray-400')} />
            </RcComponents.DropdownIndicator>
          ),
          IndicatorSeparator: () => <div className="w-[1px] h-4 bg-gray-200 mx-1 hidden" />,
          ...components,
        }}
        isDisabled={disabled || isDisabled}
        {...props}
      />
    </div>
  )
}

export { Select }
