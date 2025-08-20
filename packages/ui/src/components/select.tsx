"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { cn } from "@workspace/ui/lib/utils";
import { z } from "@workspace/ui/lib/zod";

export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export type Option = z.infer<typeof optionSchema>;

type SelectProps<S> = {
  value?: S;
  onChange?: (value: S) => void;
  options: S[];
  ["aria-invalid"]?: boolean;
  renderOption?: (data: S) => React.ReactNode;
  renderMultiValueLabel?: (data: S) => React.ReactNode;
  renderSingleValue?: (data: S) => React.ReactNode;
  disabled?: boolean;
};

export function Select<S extends Option>({
  options,
  value: controlledValue,
  onChange: controlledOnChange,
  "aria-invalid": ariaInvalid,
}: SelectProps<S>) {
  const [open, setOpen] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React.useState<
    S | undefined
  >(undefined);

  const value = controlledValue ?? uncontrolledValue;
  const onChange = controlledOnChange ?? setUncontrolledValue;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-invalid={ariaInvalid}
          className={cn("w-full justify-between px-2.5! font-normal")}
        >
          {value ? (
            options.find((option) => option.value === value.value)?.label
          ) : (
            <span className="text-muted-foreground">Select</span>
          )}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        side="bottom"
        align="start"
      >
        <Command className="bg-transparent">
          <CommandInput placeholder="Search" className="h-9" />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      value?.value === option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {/* <Checkbox checked={value === option.value} /> */}
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
