import { ComponentPreview } from "@/components/ComponentPreview";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { MdxSnippet } from "./MdxSnippet";

type MdxProps = {
  code: string;
};

const components = {
  ComponentPreview,
  Button,
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn(className)} {...props} />
  ),
  MdxSnippet,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx [&>*]:px-10">
      <Component components={components} />
    </div>
  );
}
