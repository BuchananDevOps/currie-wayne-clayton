import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center max-sm:mx-auto max-sm:max-w-md',
      )}
    >
      <div className="flex items-center justify-center w-48 h-12 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300">
        <span className="text-gray-500 text-sm font-medium">
          Venue Logos Coming Soon
        </span>
      </div>
    </div>
  )
}
