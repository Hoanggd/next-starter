import { BsNumberField } from "@workspace/ui/components/numberfield";

export function NumberFieldUnits() {
  return (
    <BsNumberField
      placeholder="Enter a number"
      formatOptions={{
        style: "unit",
        unit: "inch",
      }}
    />
  );
}
