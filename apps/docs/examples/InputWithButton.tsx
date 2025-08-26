import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/textfield";

export function InputWithButton() {
  return (
    <div className="flex items-center gap-2 w-full">
      <Input placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  );
};
