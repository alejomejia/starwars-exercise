import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
}

export function LinkButton({ href, children }: Props) {
  return (
    <Link
      className="bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full transform transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
      href={href}
    >
      {children}
    </Link>
  )
}
