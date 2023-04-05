import { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'


const Navbar = () => {
  const [mobile, setMobile] = useState(false)

  const handleClick = () => {
    setMobile((mobile) => !mobile)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: 'explore' },
    { name: 'Game', href: 'game' },
    { name: 'Upcoming', href: 'upcoming' },
  ]

  return (
    <div className='z-[100] flex w-full flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='relative flex h-14 w-14'>
              <span className='flex items-center gap-2'>
                <Image
                  alt='nft project logo'
                  src='/logo.svg'
                  height={180}
                  width={180}
                />
              </span>
            </div>
          </Link>
        </div>
        {/* Links */}
        <div className='hidden lg:flex'>
          <div className='space-x-10'>
            {navigation.map((link) => (
              <span
                key={link.name}
                className='text-gray-300 transition duration-300 hover:text-white link'
              >
                <Link
                  href={link.href}
                >
                  {link.name}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* SocialMedia */}
        <div className='lg:inline-flex hidden'>
         button
        </div>
        {/* Mobile menu */}
        <div className='inline-flex lg:hidden'>
          <div
            onClick={handleClick}
            className='cursor-pointer rounded-full bg-cr-orange p-3 shadow-lg shadow-white/10 transition-colors hover:bg-cr-gray'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth={0}
              viewBox='0 0 448 512'
              height={24}
              width={24}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
            </svg>
          </div>
        </div>
      </div>
      <div className={`${mobile ? 'menu-drop' : 'hidden'} lg:hidden`}>
        <div className='relative z-50 flex w-full flex-col space-y-4 bg-gray-800 px-6 py-8 rounded-md shadow-xl shadow-slate-900'>
          <h4 className='mb-2 text-lg text-gray-400'>Useful Links:</h4>
          {navigation.map((link) => (
            <span
              key={link.name}
              className='text-gray-300 transition duration-300 hover:text-white link'
            >
              <Link
                href={link.href}
              >
                {link.name}
              </Link>
            </span>
          ))}
          <div className='flex items-center space-x-4'>
            {/* SocialMedia */}
            {mobile && <p>Button</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
