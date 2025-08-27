"use client";

import { TextArea } from "@workspace/ui/components/textfield";
import { Label } from "@workspace/ui/components/field";

export function TextAreaWithLabel() {
  return (
    <div className="w-full">
      <Label htmlFor="message">Message</Label>
      <TextArea id="message" placeholder="Message" />
    </div>
  );
};
