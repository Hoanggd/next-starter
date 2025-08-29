'use client'

import { RadioGroup, Radio } from '@workspace/ui/components/radio-group'
import { useState } from "react"

export default function RadioGroupDemo() {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <RadioGroup
      label="Select your favorite color"
      value={selectedValue}
      onValueChange={setSelectedValue}
    >
      <Radio value="red">Red</Radio>
      <Radio value="blue">Blue</Radio>
      <Radio value="green">Green</Radio>
      <Radio value="yellow">Yellow</Radio>
    </RadioGroup>
  )
}
