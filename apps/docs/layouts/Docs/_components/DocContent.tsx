'use client'

import { DashboardTableOfContents } from '@/components/Toc'
import { TableOfContents } from '@/lib/toc'
import { ScrollArea } from '@workspace/ui/components/scroll-area'

export function DocContent({ children, toc }: { children: React.ReactNode; toc: TableOfContents }) {
  return (
    <div className="relative">
      <div className="min-h-full p-6">{children}</div>
      <div className="fixed top-0 right-0 translate-x-[100%] w-[260px]">
        <div className="fixed top-0 pt-10 pr-10 grid grid-rows-[auto_1fr]">
          <ScrollArea className="-ml-px">
            <DashboardTableOfContents toc={toc} />
            <div className="h-10"></div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
