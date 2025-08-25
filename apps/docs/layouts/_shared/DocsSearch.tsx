import { SPSearchField } from "@workspace/ui/components/searchfield";
import { cn } from "@workspace/ui/lib/utils";

export function DocsSearch({ className }: { className?: string }) {
  return (
    <SPSearchField
      placeholder="Search docs"
      className={cn("w-[260px] bg-transparent", className)}
    />
  );
}
