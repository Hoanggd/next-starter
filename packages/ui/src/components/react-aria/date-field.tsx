import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { fieldGroupStyles } from './field'
import { composeTailwindRenderProps } from './utils'
import { cn } from '@workspace/ui/lib/utils'
import { I18nProvider as ReactAriaI18nProvider } from 'react-aria-components'

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {}

export function DateField<T extends DateValue>({ ...props }: DateFieldProps<T>) {
  return (
    <AriaDateField {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1')}>
      <DateInput value={props.value} />
    </AriaDateField>
  )
}

const segmentStyles = tv({
  base: 'inline p-[1px] type-literal:px-0 outline outline-0 caret-transparent rounded-sm',
  variants: {
    isDisabled: {
      true: 'text-gray-200',
    },
    isFocused: {
      true: 'bg-primary text-white',
    },
  },
})

export function DateInput(props: Omit<DateInputProps, 'children'> & { value?: any }) {
  return (
    <ReactAriaI18nProvider locale="en-GB">
      <AriaDateInput
        className={(renderProps) =>
          fieldGroupStyles({
            ...renderProps,
            class: 'block min-w-[150px] px-2 py-1.5 text-sm',
          })
        }
        {...props}
      >
        {(segment) => (
          <DateSegment
            segment={segment}
            className={({ isDisabled, isFocused, isPlaceholder }) => {
              return cn(
                segment.type === 'literal' && !props.value && 'text-muted-foreground',
                isPlaceholder && 'text-muted-foreground',
                segmentStyles({
                  isDisabled,
                  isFocused,
                }),
              )
            }}
          />
        )}
      </AriaDateInput>
    </ReactAriaI18nProvider>
  )
}
