'use client'
import { useState } from 'react'
import { IMAGES } from '@/constants/image'
import { merge } from '@/lib/tailwind'
import Image from 'next/image'

interface Props {
  src: string
  alt?: string
  className?: string
}
export const Avatar = ({ alt = 'profile', src, className = '' }: Props) => {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <Image
      width={30}
      height={30}
      className={merge(['rounded-full', className])}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(IMAGES.USER_PLACEHOLDER)}
    />
  )
}
