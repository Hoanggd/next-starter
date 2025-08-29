"use client";

import { RadioGroup, Radio } from "@workspace/ui/components/radio-group";

export function RadioGroupHorizontal() {
  return (
    <RadioGroup orientation="horizontal">
      <Radio value="xs">xs</Radio>
      <Radio value="sm">sm</Radio>
      <Radio value="md">md</Radio>
      <Radio value="lg">lg</Radio>
      <Radio value="xl">xl</Radio>
    </RadioGroup>
  );
}
