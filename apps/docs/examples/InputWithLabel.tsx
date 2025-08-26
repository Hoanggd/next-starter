import { Label } from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/textfield";

export const InputWithLabel = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Email</Label>
      <Input />
    </div>
  );
};
