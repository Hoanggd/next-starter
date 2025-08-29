'use client'
import { RadioGroup, Radio } from '@workspace/ui/components/radio-group'
import { useState } from "react"

export default function RadioGroupForm() {
  const [shippingMethod, setShippingMethod] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  return (
    <div className="space-y-6">
      <RadioGroup
        label="Shipping Method"
        value={shippingMethod}
        onValueChange={setShippingMethod}
      >
        <Radio value="standard">Standard Shipping (3-5 days)</Radio>
        <Radio value="express">Express Shipping (1-2 days)</Radio>
        <Radio value="overnight">Overnight Shipping</Radio>
      </RadioGroup>

      <RadioGroup
        label="Payment Method"
        value={paymentMethod}
        onValueChange={setPaymentMethod}
      >
        <Radio value="credit">Credit Card</Radio>
        <Radio value="debit">Debit Card</Radio>
        <Radio value="paypal">PayPal</Radio>
      </RadioGroup>

      <div className="text-sm text-muted-foreground">
        Shipping: {shippingMethod || "Not selected"} | 
        Payment: {paymentMethod || "Not selected"}
      </div>
    </div>
  )
}
