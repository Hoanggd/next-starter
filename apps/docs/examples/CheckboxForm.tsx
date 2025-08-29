import { CheckboxGroup, Checkbox } from '@workspace/ui/components/checkbox'

export function CheckboxForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Terms and Agreements</label>
        <CheckboxGroup>
          <Checkbox value="terms">
            I agree to the Terms of Service
          </Checkbox>
          <Checkbox value="privacy">
            I agree to the Privacy Policy
          </Checkbox>
          <Checkbox value="marketing">
            I agree to receive marketing communications
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  )
}
