'use client'

interface Props {
  children: React.ReactNode
}

export const SearchLayout = ({ children }: Props) => {
  return (
    <button
      className="px-base py-small border-1 flex w-full items-center justify-between gap-4 rounded-2xl hover:shadow-sm md:w-auto"
      onClick={console.log}
    >
      {children}
    </button>
  )
}
