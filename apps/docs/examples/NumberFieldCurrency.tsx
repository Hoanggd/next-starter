import { BsNumberField } from "@workspace/ui/components/numberfield";

export function NumberFieldCurrency() {
  return (
    <BsNumberField
      placeholder="Enter a number"
      formatOptions={{
        style: "currency",
        currency: "USD",
      }}
    />
  );
}
