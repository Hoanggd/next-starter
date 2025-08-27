import { Button } from "@workspace/ui/components/button";
import { TextArea } from "@workspace/ui/components/textfield";

export function TextAreaWithButton() {
  return (
    <div className="grid gap-2 w-full">
      <TextArea placeholder="Type your message here..." />
      <Button>Send Message</Button>
    </div>
  );
}
