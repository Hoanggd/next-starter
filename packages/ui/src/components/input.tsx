import * as React from 'react'

import { cn } from '@workspace/ui/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      autoComplete="off"
      className={cn(
        'flex h-9 w-full rounded-md transition-all px-2.5 text-sm bg-white shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        'border-1 border-neutral-200 hover:border-gray-300 aria-[invalid=true]:border-red-500',
        'focus-ring',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
