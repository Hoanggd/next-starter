import { BsNumberField } from "@workspace/ui/components/numberfield";

export function NumberFieldPercentages() {
  return (
    <BsNumberField
      placeholder="Enter a number"
      formatOptions={{
        style: "percent",
      }}
    />
  );
}
