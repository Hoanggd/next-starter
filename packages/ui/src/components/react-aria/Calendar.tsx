import { getLocalTimeZone, isToday } from '@internationalized/date'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Calendar as AriaCalendar,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Button } from './button'
import { cn } from '@workspace/ui/lib/utils'

const cellStyles = tv({
  base: 'w-8 h-8 text-sm font-medium cursor-default rounded-full flex items-center justify-center data-[outside-month=true]:hidden focus:outline-none data-[focus-visible=true]:ring-2',
  variants: {
    isToday: {
      true: 'font-semibold bg-neutral-600/5',
    },
    isSelected: {
      false: 'text-neutral-700 hover:bg-neutral-600/10',
      true: 'bg-primary invalid:bg-red-600 text-white',
    },
    isDisabled: {
      true: 'text-neutral-400 dark:text-neutral-600',
    },
  },
})

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string
}

export function Calendar<T extends DateValue>({ errorMessage, className, ...props }: CalendarProps<T>) {
  return (
    <AriaCalendar className={cn('not-prose', className)} {...props}>
      <CalendarHeader />
      <CalendarGrid className="my-0">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={({ isSelected, isDisabled }) => {
                const today = isToday(date, getLocalTimeZone())

                return cellStyles({ isSelected, isDisabled, isToday: today })
              }}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  )
}

export function CalendarHeader() {
  return (
    <header className="flex items-center gap-1 pl-2 pb-1">
      <Heading className="flex-1 my-0 text-neutral-600 text-sm font-semibold capitalize" />
      <Button
        variant="icon"
        slot="previous"
        className="rounded-full w-8 h-8 text-primary focus:outline-none data-[focus-visible=true]:ring-2"
      >
        <ChevronLeft aria-hidden className="w-4 h-4" />
      </Button>
      <Button
        variant="icon"
        slot="next"
        className="rounded-full w-8 h-8 text-primary focus:outline-none data-[focus-visible=true]:ring-2"
      >
        <ChevronRight aria-hidden className="w-4 h-4" />
      </Button>
    </header>
  )
}

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="text-xs text-neutral-400 font-semibold text-center leading-8 py-0">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  )
}
