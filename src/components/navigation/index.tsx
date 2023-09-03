import { Search } from './search'
import { Logo } from './logo'
import { UserMenu } from './user'

export const Navbar = () => {
  return (
    <nav className="p-base md:px-xLarge md:py-large border-b-1 fixed z-10 flex w-full items-center justify-around gap-2 bg-white shadow-sm">
      <Logo />
      <Search />

      <UserMenu />
    </nav>
  )
}
