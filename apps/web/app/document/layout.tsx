'use client'

import { DocSidebar } from "@/app/document/_components/doc-sidebar";
import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <DocSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="text-sm capitalize">{pathname.split("/").pop()?.replace("-", " ")}</div>
        </header>
        <div className="p-4 container mx-auto max-w-2xl">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
