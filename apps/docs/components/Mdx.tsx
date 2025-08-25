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
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    let lang = "";

    try {
      lang = (children as any).props.className?.split("language-")[1];
    } catch (error) {
      lang = "bash";
    }

    return (
      <MdxSnippet lang={lang} {...props}>
        {children}
      </MdxSnippet>
    );
  },
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx [&>*]:px-10">
      <Component components={components} />
    </div>
  );
}
