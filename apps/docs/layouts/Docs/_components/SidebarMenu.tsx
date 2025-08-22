"use client";
import {
  ModuleValue,
  useModulePicker,
} from "@/layouts/Docs/_components/ModulePicker";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItem = {
  title: string;
  href: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

function getMenuGroups(module: string): MenuGroup[] {
  if (module === ModuleValue.UI) {
    return [
      {
        title: "Getting Started",
        items: [
          {
            title: "Introduction",
            href: "/docs/ui/introduction",
          },
          {
            title: "Installation",
            href: "/docs/ui/installation",
          },
        ],
      },
      {
        title: "Buttons",
        items: [
          {
            title: "Button",
            href: "/docs/ui/button",
          },
        ],
      },
      {
        title: "Forms",
        items: [
          {
            title: "Checkbox",
            href: "/docs/ui/checkbox",
          },
          {
            title: "Textfield",
            href: "/docs/ui/textfield",
          },
        ],
      },
    ];
  }

  if (module === ModuleValue.Form) {
    return [
      {
        title: "Forms",
        items: [],
      },
    ];
  }

  return [
    {
      title: "Templates",
      items: [],
    },
  ];
}

export function SidebarMenu() {
  const selectedModule = useModulePicker();
  const groups = getMenuGroups(selectedModule.value);

  return (
    <div className="relative h-full z-[1]">
      <div className="absolute z-[1] top-0 left-0 right-6 h-5 bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0">
        <ScrollArea className="h-full  -translate-x-px">
          <div className="">
            <div className="pb-24">
              <div className="h-2" />
              {groups.map((group) => (
                <div className="mb-5 space-y-1" key={group.title}>
                  <div>
                    <h3 className="px-6 flex items-center text-xs h-8 font-semibold uppercase tracking-wide text-neutral-400">
                      {group.title}
                    </h3>
                  </div>
                  {group.items.map((item) => (
                    <MenuItem {...item} key={item.title} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

function MenuItem({ title, href }: MenuItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "flex items-center text-sm px-[23px] h-7 transition-colors text-neutral-700 border-l border-transparent",
        isActive
          ? "text-neutral-800 font-medium border-neutral-800"
          : "hover:text-neutral-800 hover:border-neutral-400"
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
