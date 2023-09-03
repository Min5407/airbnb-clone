import { merge } from '@/lib/tailwind'

interface Props {
  children: React.ReactNode
  className?: string
}

export const SearchItem = ({ children, className = '' }: Props) => {
  return (
    <span
      className={merge([
        'border-l-1 border-brandColors-gray-500 md:text-tiny text-small pl-3',
        className,
      ])}
    >
      {children}
    </span>
  )
}
