'use client'

import { useMutation } from '@tanstack/react-query'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm } from '@repo/ui/form'
import { Input } from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import { z } from '@workspace/ui/lib/zod'

type FormInputs = {
  email: string
  name: string
}

const createUser = async (data: FormInputs) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  throw new Error('Error creating user', {
    cause: { email: 'Email already exists', name: 'Name already exists' },
  })
}

export const SubmissionErrors = () => {
  const form = useForm<FormInputs>()
  const createUserMutation = useMutation({ mutationFn: createUser })

  const onSubmit = (data: FormInputs) => {
    createUserMutation.mutate(data, {
      onSuccess: () => {
        window.alert(JSON.stringify(data, null, 4))
      },
      onError: (error: any) => {
        form.setSubmisionError({
          ...error.cause,
          FORM_ERROR: 'Error creating user',
        })
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 container max-w-[500px]">
        <h2>Submission Errors</h2>
        <FormField
          name="email"
          rules={{ schema: z.string().email() }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="name"
          rules={{ schema: z.string().min(4) }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={createUserMutation.isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
