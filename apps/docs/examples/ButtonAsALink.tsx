import { Link } from "@workspace/ui/components/link";
import { SquareArrowOutUpRight } from "lucide-react";

export const ButtonAsALink = () => {
  return (
    <Link variant={'default'} href="https://react-spectrum.adobe.com/react-aria/index.html" target="_blank">
      React Aria Components
      <SquareArrowOutUpRight />
    </Link>
  );
};
