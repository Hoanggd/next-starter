import { CalendarIcon } from 'lucide-react'
import { DatePicker as AriaDatePicker, DatePickerProps as AriaDatePickerProps, DateValue } from 'react-aria-components'
import { Button } from './button'
import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { Dialog } from './dialog'
import { FieldGroup } from './field'
import { Popover } from './popover'
import { cn } from '@workspace/ui/lib/utils'

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {}

export function DatePicker<T extends DateValue>({ ...props }: DatePickerProps<T>) {
  return (
    <AriaDatePicker {...props} aria-label="Date picker" className={cn('group flex flex-col gap-1', props.className)}>
      <FieldGroup className="min-w-[208px] w-auto relative flex items-center">
        <DateInput className="flex-1 min-w-[150px] px-2 py-1 text-sm" value={props.value} />
        <Button
          variant="icon"
          aria-label="Open calendar"
          aria-labelledby="open-calendar"
          className="w-[26px] h-[26px] mr-1.5 rounded-full outline-offset-0 text-gray-400 data-[pressed=true]:bg-gray-200 data-[pressed=true]:text-gray-500"
        >
          <CalendarIcon aria-hidden className="w-4 h-4" />
        </Button>
      </FieldGroup>
      <Popover className="p-1">
        <Dialog className="!p-1">
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  )
}
