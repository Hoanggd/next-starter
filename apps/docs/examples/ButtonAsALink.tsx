import { Link } from "@workspace/ui/components/link";
import { SquareArrowOutUpRight } from "lucide-react";

export const ButtonAsALink = () => {
  return (
    <Link variant={'default'} href="https://ui.shadcn.com/" target="_blank">
      Shadcn UI
      <SquareArrowOutUpRight />
    </Link>
  );
};
