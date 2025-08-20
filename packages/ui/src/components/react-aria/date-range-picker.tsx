import { CalendarIcon } from 'lucide-react'
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import { Button } from './button'
import { DateInput } from './date-field'
import { Dialog } from './dialog'
import { Description, FieldError, FieldGroup, Label } from './field'
import { Popover } from './popover'
import { RangeCalendar } from './range-calendar'
import { composeTailwindRenderProps } from './utils'
import { cn } from '@workspace/ui/lib/utils'

export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      aria-label="Date range picker"
      className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1')}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-[208px] w-auto flex items-center">
        <DateInput slot="start" className="px-2 text-sm" value={props.value} />
        <div className="flex items-center justify-center">
          <span
            aria-hidden="true"
            className={cn(
              'leading-[1] forced-colors:text-[ButtonText] group-disabled:text-neutral-200 group-disabled:dark:text-neutral-600 group-disabled:forced-colors:text-[neutralText]',
              !props.value && 'text-muted-foreground',
            )}
          >
            -
          </span>
        </div>
        <DateInput slot="end" className="flex-1 px-2 py-1.5 text-sm" value={props.value} />
        <Button
          variant="icon"
          aria-label="Open calendar"
          className="w-[26px] h-[26px] mr-1.5 rounded-full outline-offset-0 text-neutral-400 data-[pressed=true]:bg-neutral-200 data-[pressed=true]:text-neutral-500"
        >
          <CalendarIcon aria-hidden className="w-4 h-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="p-1">
        <Dialog className="!p-1">
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  )
}
