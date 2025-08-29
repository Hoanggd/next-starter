"use client";

import { RadioGroup, Radio } from "@workspace/ui/components/radio-group";

export function RadioGroupDisabled() {
  return (
    <RadioGroup isDisabled value="red">
      <Radio value="red">Red</Radio>
      <Radio value="blue">Blue</Radio>
      <Radio value="green">Green</Radio>
      <Radio value="yellow">Yellow</Radio>
    </RadioGroup>
  );
}
