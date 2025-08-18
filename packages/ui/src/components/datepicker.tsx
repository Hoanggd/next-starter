"use client";
import { useState } from "react";
import { DatePicker as RacDatePicker } from "./react-aria/DatePicker";
import { parseDate } from "@internationalized/date";

export const DatePicker = ({
  value: controlledValue,
  onChange: controlledOnChange,
  onBlur,
  disabled,
  className,
  isInvalid,
  defaultValue,
  minValue,
  maxValue,
}: {
  value?: string;
  onChange?: (date: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
  isInvalid?: boolean;
  defaultValue?: string;
  minValue?: string;
  maxValue?: string;
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(defaultValue);

  const value = controlledValue ?? uncontrolledValue;
  const onChange = controlledOnChange ?? setUncontrolledValue;

  return (
    <RacDatePicker
      value={value ? parseDate(value) : null}
      onChange={(value) => onChange(value?.toString() ?? "")}
      onBlur={onBlur}
      isDisabled={disabled}
      isInvalid={isInvalid}
      className={className}
      minValue={minValue ? parseDate(minValue) : undefined}
      maxValue={maxValue ? parseDate(maxValue) : undefined}
    />
  );
};
