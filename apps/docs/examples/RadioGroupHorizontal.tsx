'use client'

import { RadioGroup, Radio } from '@workspace/ui/components/radio-group'
import { useState } from "react"

export default function RadioGroupHorizontal() {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <RadioGroup
      label="Select your size"
      value={selectedValue}
      onValueChange={setSelectedValue}
      orientation="horizontal"
    >
      <Radio value="xs">XS</Radio>
      <Radio value="sm">SM</Radio>
      <Radio value="md">MD</Radio>
      <Radio value="lg">LG</Radio>
      <Radio value="xl">XL</Radio>
    </RadioGroup>
  )
}
