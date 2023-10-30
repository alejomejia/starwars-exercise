interface Props {
  onClick: () => void
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

export function Button({ onClick, startIcon, endIcon, children }: Props) {
  return (
    <button
      className="group capitalize sm:text-md flex items-center justify-center gap-2 bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full transform transition-all duration-200 hover:bg-yellow-300 hover:-translate-y-0.5"
      onClick={onClick}
    >
      {startIcon && <div className="w-5">{startIcon}</div>}
      <span>{children}</span>
      {endIcon && <div className="w-5">{endIcon}</div>}
    </button>
  )
}
