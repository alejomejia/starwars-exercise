import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

const DEFAULT_CLASSNAME =
  'w-12 h-12 flex items-center justify-center text-slate-50 bg-slate-900 rounded-full p-3 transition duration-200 hover:bg-slate-800'

export function IconButton({ className, children, onClick }: Props) {
  return (
    <button className={clsx(DEFAULT_CLASSNAME, className)} onClick={onClick}>
      {children}
    </button>
  )
}
