"use client";

import { RadioGroup, Radio } from "@workspace/ui/components/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup>
      <Radio value="red">Red</Radio>
      <Radio value="green">Green</Radio>
      <Radio value="blue">Blue</Radio>
    </RadioGroup>
  );
}
