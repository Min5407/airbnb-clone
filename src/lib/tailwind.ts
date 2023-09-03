import { type ClassValue, clsx } from 'clsx'
import { ClassNameValue, twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const merge = (classNames: ClassNameValue[]) => {
  return twMerge(...classNames)
}
