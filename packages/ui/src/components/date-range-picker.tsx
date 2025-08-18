"use client";

import { useState } from "react";
import {
  DateRangePicker as RacDateRangePicker,
  DateRangePickerProps,
} from "./react-aria/DateRangePicker";
import { parseDate } from "@internationalized/date";

type DateRangeValues = { start: string; end: string };

export const DateRangePicker = ({
  value: controlledValue,
  onChange: controlledOnChange,
  onBlur,
  disabled,
  className,
  isInvalid,
  minValue,
  maxValue,
}: DateRangePickerProps<any> & {
  value?: DateRangeValues;
  onChange?: (value: DateRangeValues) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
  isInvalid?: boolean;
  minValue?: string;
  maxValue?: string;
}) => {
  const [uncontrolledValue, uncontrolledOnChange] = useState<
    DateRangeValues | undefined
  >();
  const value = controlledValue ?? uncontrolledValue;
  const onChange = controlledOnChange ?? uncontrolledOnChange;

  return (
    <RacDateRangePicker
      value={
        value?.start && value?.end
          ? { start: parseDate(value.start), end: parseDate(value.end) }
          : null
      }
      onChange={(value) =>
        onChange?.({
          start: value?.start?.toString() ?? "",
          end: value?.end?.toString() ?? "",
        })
      }
      onBlur={onBlur}
      isDisabled={disabled}
      isInvalid={isInvalid}
      className={className}
      minValue={minValue}
      maxValue={maxValue}
    />
  );
};
