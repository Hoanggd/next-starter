import React from 'react'
import { Logo } from '@/components/Logo'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Button } from '@workspace/ui/components/button'
// import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export function SidebarHeader() {
  return (
    <div className="h-full flex items-center px-4">
      <Logo className="-ml-2" />
      <Button asChild variant="ghost" size="icon" className="ml-auto">
        <a href="https://github.com/Hoanggd/phasor" target="_blank">
          <GithubIcon />
        </a>
      </Button>
      {/* <ThemeSwitcher /> */}
    </div>
  )
}
