import { ToggleLayout } from '@/components/layouts/ToggleLayout'
import { AvatarButton } from './AvatarButton'
import { Menu } from './Menu'

export const UserMenu = () => {
  return (
    <ToggleLayout TriggerComponent={AvatarButton()} className="relative">
      <Menu />
    </ToggleLayout>
  )
}
