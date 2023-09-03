import { BiSearch } from 'react-icons/bi'
import { SearchLayout } from './Layout'
import { SearchItem } from './SearchItem'

export const Search = () => {
  return (
    <SearchLayout>
      <SearchItem className="border-l-0 pl-0 font-semibold ">
        Anywhere
      </SearchItem>
      <SearchItem className="hidden font-semibold md:block">
        Any Week
      </SearchItem>
      <SearchItem className="hidden font-extralight md:block">
        Add Guests
      </SearchItem>
      <span className="bg-brandColors-red p-small rounded-full text-white">
        <BiSearch />
      </span>
    </SearchLayout>
  )
}
