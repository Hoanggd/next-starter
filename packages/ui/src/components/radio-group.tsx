"use client";

import { Circle } from "lucide-react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components";

import { cn } from "@workspace/ui/lib/utils";

import { Label, labelVariants } from "./field";

const RadioGroup = ({ className, ...props }: AriaRadioGroupProps) => {
  return (
    <AriaRadioGroup
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          "group/radiogroup flex flex-col flex-wrap gap-2",
          renderProps.orientation === "horizontal" && "flex-row items-center gap-4",
          className
        )
      )}
      {...props}
    />
  );
};

const Radio = ({ className, children, ...props }: AriaRadioProps) => {
  return (
    <AriaRadio
      className={composeRenderProps(className, (className) =>
        cn(
          "group/radio flex items-center gap-x-2 text-sm font-medium",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
          labelVariants,
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          <span
            className={cn(
              "flex aspect-square size-4 items-center justify-center rounded-full border bg-background-secondary text-white ring-offset-background",
              /* Focus */
              "group-data-[focused]/radio:outline-none",
              /* Focus Visible */
              "group-data-[focus-visible]/radio:ring-2 group-data-[focus-visible]/radio:ring-primary/40 group-data-[focus-visible]/radio:ring-offset-2",
              /* Selected */
              "group-data-[selected]/radio:bg-primary group-data-[selected]/radio:border-black/10 group-data-[selected]/radio:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
              /* Selected Dark */
              "dark:group-data-[selected]/radio:border-none",
              /* Disabled */
              "group-data-[disabled]/radio:cursor-not-allowed group-data-[disabled]/radio:opacity-50",
              /* Invalid */
              "group-data-[invalid]/radio:border-destructive"
            )}
          >
            {renderProps.isSelected && (
              <Circle className="size-1.5 fill-current text-current" />
            )}
          </span>
          {children}
        </>
      ))}
    </AriaRadio>
  );
};

interface BsRadioGroupProps extends AriaRadioGroupProps {
  label?: string;
}

function BsRadioGroup({
  label,
  className,
  children,
  ...props
}: BsRadioGroupProps) {
  return (
    <RadioGroup
      className={composeRenderProps(className, (className) =>
        cn("group/radiogroup flex-col items-start", className)
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <Label>{label}</Label>
          <div className="flex flex-col flex-wrap gap-2 group-data-[orientation=horizontal]/radiogroup:flex-row">
            {children}
          </div>
        </>
      ))}
    </RadioGroup>
  );
}

export { RadioGroup, Radio, BsRadioGroup };
export type { BsRadioGroupProps };
