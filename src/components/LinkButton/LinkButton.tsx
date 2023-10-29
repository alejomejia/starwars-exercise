import Link from 'next/link'

interface Props {
  href: string | null
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

export function LinkButton({ href, startIcon, endIcon, children }: Props) {
  return href ? (
    <Link
      className="group capitalize sm:text-md flex items-center justify-center gap-2 bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full transform transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
      href={href}
    >
      {startIcon && <div className="w-5">{startIcon}</div>}
      <span>{children}</span>
      {endIcon && <div className="w-5">{endIcon}</div>}
    </Link>
  ) : (
    <span className="cursor-default capitalize sm:text-md flex items-center justify-center gap-2 bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full opacity-50">
      {startIcon && <div className="w-5">{startIcon}</div>}
      <span>{children}</span>
      {endIcon && <div className="w-5">{endIcon}</div>}
    </span>
  )
}
