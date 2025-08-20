import React from 'react'
import {
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { CalendarGridHeader, CalendarHeader } from './calendar'
import { focusRing } from './utils'
import { useIsMobile } from '@workspace/ui/hooks/use-mobile'
import { range } from 'lodash'
import { cn } from '@workspace/ui/lib/utils'

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'visibleDuration'> {
  errorMessage?: string
}

const cell = tv({
  extend: focusRing,
  base: 'w-full h-full flex items-center justify-center rounded-full forced-color-adjust-none text-sm font-medium text-neutral-600 dark:text-neutral-200',
  variants: {
    selectionState: {
      none: 'group-hover:bg-neutral-600/10 group-pressed:bg-neutral-200',
      middle: [
        'group-hover:bg-neutral-300 forced-colors:group-hover:bg-[Highlight]',
        'group-invalid:group-hover:bg-red-200 forced-colors:group-invalid:group-hover:bg-[Mark]',
        'group-pressed:bg-blue-300 forced-colors:group-pressed:bg-[Highlight] forced-colors:text-[HighlightText]',
        'group-invalid:group-pressed:bg-red-300 forced-colors:group-invalid:group-pressed:bg-[Mark]',
      ],
      cap: 'bg-primary group-invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:group-invalid:bg-[Mark] text-white forced-colors:text-[HighlightText]',
    },
    isDisabled: {
      true: 'text-neutral-300',
    },
  },
})

export function RangeCalendar<T extends DateValue>({ errorMessage, className, ...props }: RangeCalendarProps<T>) {
  const isMobile = useIsMobile()
  const months = isMobile ? 1 : 2

  return (
    <AriaRangeCalendar className={cn('not-prose', className)} visibleDuration={{ months: months }} {...props}>
      <CalendarHeader />
      <div className="flex gap-3 items-start">
        {range(0, months).map((offset) => (
          <CalendarGrid key={offset} offset={{ months: offset }} className="[&_td]:px-0 my-0">
            <CalendarGridHeader />
            <CalendarGridBody>
              {(date) => (
                <CalendarCell
                  date={date}
                  className={cn(
                    'group text-sm outline-0 cursor-default data-[outside-month=true]:hidden mb-1',
                    '[td:first-child_&_div]:rounded-s-full [td:last-child_&_div]:rounded-e-full',
                  )}
                >
                  {({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isFocusVisible, isDisabled }) => {
                    const selectionState =
                      isSelected && (isSelectionStart || isSelectionEnd) ? 'cap' : isSelected ? 'middle' : 'none'
                    const isEndOfMonth = date.calendar.getDaysInMonth(date) === date.day
                    const isStartOfMonth = date.day === 1
                    const fadeRight = selectionState === 'middle' && isEndOfMonth
                    const fadeLeft = selectionState === 'middle' && isStartOfMonth

                    return (
                      <div
                        className={cn(
                          'w-8 h-8',
                          isSelected && 'bg-neutral-600/10',
                          isSelectionStart && 'rounded-s-full',
                          isSelectionEnd && 'rounded-e-full',
                          fadeRight && 'bg-transparent bg-gradient-to-r from-neutral-600/10 to-neutral-600/0',
                          fadeLeft && 'bg-transparent bg-gradient-to-l from-neutral-600/10 to-neutral-600/0',
                        )}
                      >
                        <span
                          className={cell({
                            selectionState,
                            isDisabled,
                            isFocusVisible,
                          })}
                        >
                          {formattedDate}
                        </span>
                      </div>
                    )
                  }}
                </CalendarCell>
              )}
            </CalendarGridBody>
          </CalendarGrid>
        ))}
      </div>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  )
}
