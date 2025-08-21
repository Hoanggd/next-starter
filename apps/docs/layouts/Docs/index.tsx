import { CrossIcon } from '@/layouts/Docs/_components/Icons'
import { ModulePicker } from '@/layouts/Docs/_components/ModulePicker'
import { SidebarHeader } from '@/layouts/Docs/_components/SidebarHeader'
import { SidebarMenu } from '@/layouts/Docs/_components/SidebarMenu'
import { SidebarSearch } from '@/layouts/Docs/_components/SidebarSearch'
import React from 'react'

export function DocsLayout({ children, tocs }: { children: React.ReactNode; tocs: React.ReactNode }) {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto bg-neutral-50">
        {/* header  */}
        <div className="fixed h-16 max-w-screen-xl w-full z-20">
          <CrossIcon className="absolute top-16 left-[0.5px] -translate-x-1/2 -translate-y-1/2" />
          <CrossIcon className="absolute top-16 right-[0.5px] translate-x-1/2 -translate-y-1/2" />
          <div className="grid grid-cols-[260px_1fr_260px] h-full">
            <div className="border-l h-full">
              <SidebarHeader />
            </div>
            <div className="flex items-center px-4 border-x">
              <SidebarSearch />
            </div>
            <div className="border-r h-full"></div>
          </div>
        </div>
        {/* header background */}
        <div className="fixed h-16 left-0 w-full border-b bg-neutral-50 z-[19]"></div>

        {/* content layout */}
        <div className="min-h-screen grid grid-cols-[260px_1fr_260px] max-w-[1280px] w-full">
          <div className="h-full">
            <div className="w-[260px] h-full fixed border-l pt-16">
              <ModulePicker />
              <SidebarMenu />
            </div>
          </div>

          {/* main content */}
          <div className="h-full pt-16 border-x grid grid-cols-[40px_1fr_40px]">
            <div className="bg-[image:repeating-linear-gradient(315deg,_#F3F4F6_0,_#F3F4F6_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
            <div className="border-x">{children}</div>
            <div className="bg-[image:repeating-linear-gradient(315deg,_#F3F4F6_0,_#F3F4F6_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
          </div>
          <div className="h-full py-16">
            <div className="w-[260px] h-full fixed border-r">{tocs}</div>
          </div>
        </div>
      </div>
    </>
  )
}
