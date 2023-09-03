export const Menu = () => {
  return (
    <ul className="border-1 absolute right-1 flex w-36 translate-y-2 flex-col items-center justify-center bg-white ">
      <button className="text-tiny w-full p-3 text-left font-semibold transition  hover:bg-neutral-100">
        Login
      </button>
      <button className="text-tiny w-full p-3 text-left font-semibold transition hover:bg-neutral-100">
        Sign Up
      </button>
    </ul>
  )
}
