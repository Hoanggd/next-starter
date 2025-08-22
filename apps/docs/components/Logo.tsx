import { cn } from '@workspace/ui/lib/utils'
import Link from 'next/link'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2',
        className,
      )}
    >
      <img src="/logo.png" alt="Logo" className="w-7 h-7" />
      <span className="font-semibold">Sophon</span>
    </Link>
  )
}
