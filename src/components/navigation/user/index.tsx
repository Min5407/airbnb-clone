import { Avatar } from '@/components/avatar'
import { ToggleLayout } from '@/components/layouts/ToggleLayout'
import { IMAGES } from '@/constants/image'
import { AiOutlineMenu } from 'react-icons/ai'

export const UserMenu = () => {
  return (
    <ToggleLayout
      TriggerComponent={
        <button className="border-1 p-small flex items-center justify-center gap-2 rounded-full text-base">
          <AiOutlineMenu />
          <Avatar
            src={IMAGES.USER_PLACEHOLDER}
            className="hidden sm:inline-block "
          />
        </button>
      }
    >
      <span>list</span>
    </ToggleLayout>
  )
}
