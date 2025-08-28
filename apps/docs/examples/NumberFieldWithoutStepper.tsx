import { BsNumberField } from "@workspace/ui/components/numberfield";

export function NumberFieldWithoutStepper() {
  return <BsNumberField showStepper={false} placeholder="Enter a number" />;
}