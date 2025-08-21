'use client'
import { ModuleValue, useModulePicker } from '@/layouts/Docs/_components/ModulePicker'
import { ScrollArea } from '@workspace/ui/components/scroll-area'
import { cn } from '@workspace/ui/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuItem = {
  title: string
  href: string
}

type MenuGroup = {
  title: string
  items: MenuItem[]
}

function getMenuGroups(module: string): MenuGroup[] {
  if (module === ModuleValue.UI) {
    return [
      {
        title: 'Getting Started',
        items: [
          {
            title: 'Introduction',
            href: '/docs/ui/introduction',
          },
          {
            title: 'Installation',
            href: '/docs/ui/installation',
          },
        ],
      },
      {
        title: 'Components',
        items: [
          {
            title: 'Sidebar',
            href: '/docs/ui/sidebar',
          },
          {
            title: 'Accordion',
            href: '/docs/ui/accordion',
          },
          {
            title: 'Alert',
            href: '/docs/ui/alert',
          },
          {
            title: 'Alert Dialog',
            href: '/docs/ui/alert-dialog',
          },
          {
            title: 'Aspect Ratio',
            href: '/docs/ui/aspect-ratio',
          },
          {
            title: 'Avatar',
            href: '/docs/ui/avatar',
          },
          {
            title: 'Badge',
            href: '/docs/ui/badge',
          },
          {
            title: 'Breadcrumb',
            href: '/docs/ui/breadcrumb',
          },
          {
            title: 'Button',
            href: '/docs/ui/button',
          },
          {
            title: 'Calendar',
            href: '/docs/ui/calendar',
          },
          {
            title: 'Card',
            href: '/docs/ui/card',
          },
          {
            title: 'Carousel',
            href: '/docs/ui/carousel',
          },
          {
            title: 'Chart',
            href: '/docs/ui/chart',
          },
          {
            title: 'Checkbox',
            href: '/docs/ui/checkbox',
          },
          {
            title: 'Collapsible',
            href: '/docs/ui/collapsible',
          },
          {
            title: 'Combobox',
            href: '/docs/ui/combobox',
          },
          {
            title: 'Command',
            href: '/docs/ui/command',
          },
          {
            title: 'Context Menu',
            href: '/docs/ui/context-menu',
          },
          {
            title: 'Data Table',
            href: '/docs/ui/data-table',
          },
          {
            title: 'Date Picker',
            href: '/docs/ui/date-picker',
          },
          {
            title: 'Dialog',
            href: '/docs/ui/dialog',
          },
          {
            title: 'Drawer',
            href: '/docs/ui/drawer',
          },
          {
            title: 'Dropdown Menu',
            href: '/docs/ui/dropdown-menu',
          },
          {
            title: 'Form',
            href: '/docs/ui/form',
          },
          {
            title: 'Hover Card',
            href: '/docs/ui/hover-card',
          },
          {
            title: 'Input',
            href: '/docs/ui/input',
          },
          {
            title: 'Input OTP',
            href: '/docs/ui/input-otp',
          },
          {
            title: 'Label',
            href: '/docs/ui/label',
          },
          {
            title: 'Menubar',
            href: '/docs/ui/menubar',
          },
          {
            title: 'Navigation Menu',
            href: '/docs/ui/navigation-menu',
          },
          {
            title: 'Pagination',
            href: '/docs/ui/pagination',
          },
          {
            title: 'Popover',
            href: '/docs/ui/popover',
          },
          {
            title: 'Progress',
            href: '/docs/ui/progress',
          },
          {
            title: 'Radio Group',
            href: '/docs/ui/radio-group',
          },
          {
            title: 'Resizable',
            href: '/docs/ui/resizable',
          },
          {
            title: 'Scroll Area',
            href: '/docs/ui/scroll-area',
          },
          {
            title: 'Select',
            href: '/docs/ui/select',
          },
          {
            title: 'Separator',
            href: '/docs/ui/separator',
          },
          {
            title: 'Sheet',
            href: '/docs/ui/sheet',
          },
          {
            title: 'Skeleton',
            href: '/docs/ui/skeleton',
          },
          {
            title: 'Slider',
            href: '/docs/ui/slider',
          },
          {
            title: 'Sonner',
            href: '/docs/ui/sonner',
          },
          {
            title: 'Switch',
            href: '/docs/ui/switch',
          },
          {
            title: 'Table',
            href: '/docs/ui/table',
          },
          {
            title: 'Tabs',
            href: '/docs/ui/tabs',
          },
          {
            title: 'Textarea',
            href: '/docs/ui/textarea',
          },
          {
            title: 'Toast',
            href: '/docs/ui/toast',
          },
          {
            title: 'Toggle',
            href: '/docs/ui/toggle',
          },
          {
            title: 'Toggle Group',
            href: '/docs/ui/toggle-group',
          },
          {
            title: 'Tooltip',
            href: '/docs/ui/tooltip',
          },
        ],
      },
    ]
  }

  if (module === ModuleValue.Form) {
    return [
      {
        title: 'Forms',
        items: [],
      },
    ]
  }

  return [
    {
      title: 'Templates',
      items: [],
    },
  ]
}

export function SidebarMenu() {
  const selectedModule = useModulePicker()
  const groups = getMenuGroups(selectedModule.value)

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
  )
}

function MenuItem({ title, href }: MenuItem) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'flex items-center text-sm px-[23px] h-7 transition-colors text-neutral-700 border-l border-transparent',
        isActive ? 'text-neutral-800 font-medium border-neutral-800' : 'hover:text-neutral-800 hover:border-neutral-400',
      )}
      href={href}
    >
      {title}
    </Link>
  )
}
