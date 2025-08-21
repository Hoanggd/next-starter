import { cn } from '@workspace/ui/lib/utils'
import Link from 'next/link'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'block group py-2 px-2 hover:bg-gray-100 rounded-lg transition-colors cursor-default active:bg-white',
        className,
      )}
    >
      <img src="/logo.svg" alt="Logo" />
    </Link>
  )
}
