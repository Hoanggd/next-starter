import { CopyToClipboard } from "@/components/CopyToClipboard";
import { highlightCode } from "@/lib/highlight-code";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import { CodeIcon, SquareDashedBottomCode, SquareTerminal } from "lucide-react";

export type MdxSnippetProps = {
  children: any;
  className?: string;
  lang?: string;
};

export async function MdxSnippet({
  children,
  className,
  lang = "bash",
}: MdxSnippetProps) {
  let code = "";

  try {
    code = children?.props.children || "";
  } catch (error) {
    code = "";
  }

  const out = await highlightCode(code, {
    lang,
  });

  return (
    <div>
      <div className="p-2 space-y-1.5 border rounded-xl bg-background">
        <div
          className={cn(
            "pl-1 flex items-center gap-1 not-prose text-sm",
            className
          )}
        >
          {lang === "bash" ? (
            <SquareTerminal size={16} strokeWidth={1.5} />
          ) : (
            <CodeIcon size={16} strokeWidth={1.5} />
          )}
          <div className="pb-px">{lang}</div>
        </div>

        <div className="relative border rounded-md overflow-hidden ">
          <CopyToClipboard
            text={code}
            className="absolute right-2 top-2 z-[1]"
          />
          <div className="">
            <ScrollArea className="grid">
              <div
                dangerouslySetInnerHTML={{ __html: out }}
                className="max-h-[800px] [&>pre]:my-0 [&>pre]:rounded-none"
              />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
