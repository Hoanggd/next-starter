import React from 'react'
import { Logo } from '@/components/Logo'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Link } from '@workspace/ui/components/link'
// import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export function SidebarHeader() {
  return (
    <div className="h-full flex items-center px-6">
      <Logo />
      <Link href="https://github.com/Hoanggd/next-starter" target="_blank" className="ml-auto">
        <GithubIcon />
      </Link>
      {/* <ThemeSwitcher /> */}
    </div>
  )
}
