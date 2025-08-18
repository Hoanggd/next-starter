'use client'

import { Button } from '@repo/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm } from '@repo/ui/form'
import { Input } from '@repo/ui/input'
import { extractDecimal, extractLetters, formatDecimal } from '@repo/lib/text'

type FormInputs = {
  currency: string
  value: string
}

export const ParseAndTransform = () => {
  const form = useForm<FormInputs>({
    defaultValues: {
      currency: '',
      value: '',
    },
  })

  const onSubmit = (data: FormInputs) => {
    window.alert(JSON.stringify(data, null, 4))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-[500px]">
        <h2>Basic Form</h2>
        <FormField
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <FormControl>
                <Input {...field} onChange={(e) => field.onChange(extractLetters(e.target.value.toUpperCase()))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => field.onChange(extractDecimal(e.target.value))}
                  onBlur={(e) => field.onChange(formatDecimal(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
