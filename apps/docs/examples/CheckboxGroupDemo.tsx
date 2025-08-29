

import { CheckboxGroup, Checkbox } from '@workspace/ui/components/checkbox'

export function CheckboxGroupDemo() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Select your interests</label>
      <CheckboxGroup>
        <Checkbox value="reading">Reading</Checkbox>
        <Checkbox value="writing">Writing</Checkbox>
        <Checkbox value="coding">Coding</Checkbox>
        <Checkbox value="design">Design</Checkbox>
      </CheckboxGroup>
    </div>
  )
}
