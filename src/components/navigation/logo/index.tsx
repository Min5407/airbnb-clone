import { IMAGES } from '@/constants/image'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <h1 className="hidden md:block">
      <Link href="/">
        <Image
          priority
          width={100}
          height={100}
          src={IMAGES.AIRBNB_LOGO}
          alt="airbnb logo"
        />
      </Link>
    </h1>
  )
}
