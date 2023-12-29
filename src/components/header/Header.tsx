import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => setIsNavOpen((prev) => !prev)

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-dark-blue-d'>
      <nav className='flex items-center justify-between h-20 mx-6'>
        <a href='#'>
          <img className='w-[6rem]' src='/images/logo.svg' alt='Fylo logo' />
        </a>
        <div
          className={`${
            isNavOpen ? 'max-md:top-0' : 'max-md:-top-full'
          } max-md:fixed max-md:left-0 max-md:w-full max-md:bg-dark-blue-d max-md:h-[16rem] max-md:duration-300 max-md:pt-20 max-md:rounded-bl-3xl max-md:rounded-br-3xl`}
        >
          <ul className='font-raleway flex flex-col items-center gap-y-6'>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Team</a>
            </li>
            <li>
              <a href='#'>Sign In</a>
            </li>
          </ul>
          <div onClick={handleToggleNav} className='absolute right-6 top-6'>
            <X className='text-white h-8 w-8' />
          </div>
        </div>
        <div onClick={handleToggleNav}>
          <Menu className='text-white w-8 h-8' />
        </div>
      </nav>
    </header>
  )
}
