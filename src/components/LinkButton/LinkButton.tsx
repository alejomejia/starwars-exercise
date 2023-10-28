import Link from 'next/link'

interface Props {
  href: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

export function LinkButton({ href, startIcon, endIcon, children }: Props) {
  return (
    <Link
      className="group capitalize sm:text-md inline-flex items-center gap-2 bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full transform transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
      href={href}
    >
      {startIcon && <div className="w-5">{startIcon}</div>}
      {children}
      {endIcon && endIcon}
    </Link>
  )
}
