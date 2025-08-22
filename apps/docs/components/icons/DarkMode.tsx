import * as React from 'react'

export function DarkModeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M8 2a4.243 4.243 0 1 0 6 6 6 6 0 1 1-6-6M13.333 2v2.667M14.667 3.333H12"
      ></path>
    </svg>
  )
}
