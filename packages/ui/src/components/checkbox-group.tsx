import { Checkbox } from '@workspace/ui/components/checkbox'
import { FormLabel } from '@workspace/ui/components/form'
import { cn } from '@workspace/ui/lib/utils'
import React from 'react'
import { z } from '@workspace/ui/lib/zod'

export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
})

export type Option = z.infer<typeof optionSchema>

export const CheckboxGroup = <S extends Option>({
  options,
  value = [],
  onChange,
  onBlur,
  disabled,
  className,
  'aria-invalid': ariaInvalid,
}: {
  options: S[]
  value: S[] | undefined
  onChange: (value: S[]) => void
  onBlur?: () => void
  disabled?: boolean
  className?: string
  'aria-invalid'?: boolean
}) => {
  const id = React.useId()

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {options.map((option) => {
        const optionId = `${id}-${option.value}`

        return (
          <div className="flex items-center gap-2" key={option.value}>
            <Checkbox
              id={optionId}
              checked={value.some((v) => v.value === option.value)}
              onCheckedChange={(checked) => {
                onChange(checked ? [...value, option] : value.filter((v) => v.value !== option.value))
              }}
              onBlur={() => onBlur?.()}
              aria-invalid={ariaInvalid}
              disabled={disabled}
            />
            <FormLabel htmlFor={optionId}>{option.label}</FormLabel>
          </div>
        )
      })}
    </div>
  )
}
