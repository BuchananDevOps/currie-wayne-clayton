'use client'

import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width={240}
      height={34}
      viewBox="0 0 240 34"
      className={clsx(className, 'overflow-visible')}
      fill="currentColor"
    >
      <text
        x="0"
        y="24"
        className="font-display text-2xl font-bold tracking-tight"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        Currie Wayne Clayton
      </text>
    </svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      className={clsx(className, 'overflow-visible')}
      fill="currentColor"
    >
      <text
        x="17"
        y="24"
        textAnchor="middle"
        className="font-display text-xl font-bold"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        CWC
      </text>
    </svg>
  )
}
