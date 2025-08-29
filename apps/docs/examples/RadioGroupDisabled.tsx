'use client'

import { RadioGroup, Radio } from '@workspace/ui/components/radio-group'

export default function RadioGroupDisabled() {
  return (
    <RadioGroup
      label="Select your favorite color"
      isDisabled
      value="red"
    >
      <Radio value="red">Red</Radio>
      <Radio value="blue">Blue</Radio>
      <Radio value="green">Green</Radio>
      <Radio value="yellow">Yellow</Radio>
    </RadioGroup>
  )
}
