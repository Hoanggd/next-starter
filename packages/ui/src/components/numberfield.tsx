"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  ButtonProps as AriaButtonProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@workspace/ui/lib/utils";

import { Button } from "./button";
import { FieldGroup } from "./field";

const NumberField = AriaNumberField;

function NumberFieldInput({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "w-fit min-w-0 flex-1 border-r border-transparent bg-background pr-2 outline outline-0 placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden",
          className
        )
      )}
      {...props}
    />
  );
}

function NumberFieldSteppers({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute right-1.5 flex h-full flex-col", className)}
      {...props}
    >
      <NumberFieldStepper slot="increment" className="translate-y-0.5">
        <ChevronUp aria-hidden className="size-[14px]!" />
      </NumberFieldStepper>
      <NumberFieldStepper slot="decrement">
        <ChevronDown aria-hidden className="size-[14px]! -translate-y-0.5" />
      </NumberFieldStepper>
    </div>
  );
}

function NumberFieldStepper({ className, ...props }: AriaButtonProps) {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        cn(
          "w-auto grow rounded-none px-0.5 text-muted-foreground size-[14px] data-[hovered]:text-foreground cursor-default",
          className
        )
      )}
      variant={"unstyled"}
      {...props}
    />
  );
}

interface BsNumberFieldProps extends AriaNumberFieldProps {
  showStepper?: boolean;
  placeholder?: string;
  "aria-invalid"?: boolean;
}

function BsNumberField({
  className,
  showStepper = true,
  placeholder,
  ...props
}: BsNumberFieldProps) {
  return (
    <NumberField
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className)
      )}
      isInvalid={props["aria-invalid"]}
      {...props}
    >
      <FieldGroup>
        <NumberFieldInput placeholder={placeholder} />
        {showStepper && <NumberFieldSteppers />}
      </FieldGroup>
    </NumberField>
  );
}

export {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
  NumberFieldStepper,
  BsNumberField,
};
export type { BsNumberFieldProps };
