import { AiOutlineMenu } from 'react-icons/ai'
import { Avatar } from '@/components/avatar'
import { IMAGES } from '@/constants/image'

export const AvatarButton = () => {
  return (
    <button className="border-1 p-small flex items-center justify-center gap-2 rounded-full text-base">
      <AiOutlineMenu />
      <Avatar
        src={IMAGES.USER_PLACEHOLDER}
        className="hidden sm:inline-block "
      />
    </button>
  )
}
