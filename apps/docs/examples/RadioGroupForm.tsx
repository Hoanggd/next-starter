"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { RadioGroup, Radio } from "@workspace/ui/components/radio-group";
import { Separator } from "@workspace/ui/components/separator";
import { z } from "@workspace/ui/lib/zod";

interface FormData {
  shippingMethod: string;
  paymentMethod: string;
}

export function RadioGroupForm() {
  const form = useForm<FormData>({
    defaultValues: {
      shippingMethod: "",
      paymentMethod: "",
    },
  });

  function onSubmit(data: FormData) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-background-tertiary p-4">
          <code className="text-foreground">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="shippingMethod"
          rules={{ validate: z.string().min(1).validateFn() }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup {...field}>
                  <FormLabel>Shipping Method</FormLabel>
                  <Radio value="standard">Standard Shipping (3-5 days)</Radio>
                  <Radio value="express">Express Shipping (1-2 days)</Radio>
                  <Radio value="overnight">Overnight Shipping</Radio>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentMethod"
          rules={{ validate: z.string().min(1).validateFn() }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup {...field}>
                  <FormLabel>Payment Method</FormLabel>
                  <Radio value="credit">Credit Card</Radio>
                  <Radio value="debit">Debit Card</Radio>
                  <Radio value="paypal">PayPal</Radio>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
