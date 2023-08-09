import { useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import Connect from './Connect'

const Navbar = () => {
  const [mobile, setMobile] = useState(false)

  const handleClick = () => {
    setMobile((mobile) => !mobile)
  }

    const desktop = [
      { name: 'Home', href: '/' },
      { name: 'Launchpad', href: 'Launchpad' },
      { name: 'Games', href: 'Games' },
      { name: 'Collection', href: 'collection' },
    ]

  const navigation = [
    {
      icon: (props) => (
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <path
            d='M20.0833 15.1998L21.2854 15.9211C21.5221 16.0632 21.5989 16.3703 21.4569 16.6071C21.4146 16.6774 21.3557 16.7363 21.2854 16.7786L12.5144 22.0411C12.1977 22.2311 11.8021 22.2311 11.4854 22.0411L2.71451 16.7786C2.47772 16.6365 2.40093 16.3294 2.54301 16.0926C2.58523 16.0222 2.64413 15.9633 2.71451 15.9211L3.9166 15.1998L11.9999 20.0498L20.0833 15.1998ZM20.0833 10.4998L21.2854 11.2211C21.5221 11.3632 21.5989 11.6703 21.4569 11.9071C21.4146 11.9774 21.3557 12.0363 21.2854 12.0786L11.9999 17.6498L2.71451 12.0786C2.47772 11.9365 2.40093 11.6294 2.54301 11.3926C2.58523 11.3222 2.64413 11.2633 2.71451 11.2211L3.9166 10.4998L11.9999 15.3498L20.0833 10.4998ZM12.5144 1.30852L21.2854 6.57108C21.5221 6.71315 21.5989 7.02028 21.4569 7.25707C21.4146 7.32745 21.3557 7.38635 21.2854 7.42857L11.9999 12.9998L2.71451 7.42857C2.47772 7.2865 2.40093 6.97937 2.54301 6.74258C2.58523 6.6722 2.64413 6.6133 2.71451 6.57108L11.4854 1.30852C11.8021 1.11851 12.1977 1.11851 12.5144 1.30852ZM11.9999 3.33221L5.88723 6.99983L11.9999 10.6674L18.1126 6.99983L11.9999 3.33221Z'
            fill='rgba(255,255,255,1)'
          ></path>
        </svg>
      ),
      name: 'My Items',
      href: '/',
    },
    {
      icon: (props) => (
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
        >
          <path
            d='M14.5049 2.00293C16.4379 2.00293 18.0049 3.56993 18.0049 5.50293C18.0049 6.04014 17.8839 6.54908 17.6676 7.00397L21.0049 7.00293C21.5572 7.00293 22.0049 7.45064 22.0049 8.00293V12.0029C22.0049 12.5552 21.5572 13.0029 21.0049 13.0029H20.0049V21.0029C20.0049 21.5552 19.5572 22.0029 19.0049 22.0029H5.00488C4.4526 22.0029 4.00488 21.5552 4.00488 21.0029V13.0029H3.00488C2.4526 13.0029 2.00488 12.5552 2.00488 12.0029V8.00293C2.00488 7.45064 2.4526 7.00293 3.00488 7.00293L6.34219 7.00397C6.12591 6.54908 6.00488 6.04014 6.00488 5.50293C6.00488 3.56993 7.57189 2.00293 9.50488 2.00293C10.4849 2.00293 11.3708 2.40569 12.0061 3.05471C12.639 2.40569 13.5249 2.00293 14.5049 2.00293ZM18.0049 13.0029H6.00488V20.0029H18.0049V13.0029ZM20.0049 9.00293H4.00488V11.0029H20.0049V9.00293ZM9.50488 4.00293C8.67646 4.00293 8.00488 4.6745 8.00488 5.50293C8.00488 6.28263 8.59977 6.92338 9.36042 6.99606L9.50488 7.00293H11.0049V5.50293C11.0049 4.72323 10.41 4.08248 9.64934 4.0098L9.50488 4.00293ZM14.5049 4.00293L14.3604 4.0098C13.6473 4.07794 13.0799 4.64536 13.0117 5.35847L13.0049 5.50293V7.00293H14.5049L14.6493 6.99606C15.41 6.92338 16.0049 6.28263 16.0049 5.50293C16.0049 4.72323 15.41 4.08248 14.6493 4.0098L14.5049 4.00293Z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      ),
      name: 'My Rewards',
      href: 'Rewards',
    },
    {
      icon: (props) => (
        <svg
        {...props}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
        >
          <path
            d='M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      ),
      name: 'Profile Setting',
      href: 'Profile',
    },
    {
      icon: (props) => (
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
        >
          <path
            d='M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      ),
      name: 'Main Wallet',
      href: 'main',
    },
    {
      icon: (props) => (
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
        >
          <path
            d='M19.3788 15.1057C20.9258 11.442 19.5373 7.11425 16.0042 5.07444C13.4511 3.6004 10.4232 3.69359 8.03452 5.05554L7.04216 3.31873C10.028 1.61633 13.8128 1.49984 17.0042 3.34239C21.4949 5.93507 23.2139 11.4848 21.1217 16.1119L22.4635 16.8866L18.2984 19.1007L18.1334 14.3866L19.3788 15.1057ZM4.62961 8.89962C3.08263 12.5633 4.47116 16.891 8.00421 18.9308C10.5573 20.4049 13.5851 20.3117 15.9737 18.9499L16.9661 20.6866C13.9803 22.389 10.1956 22.5054 7.00421 20.6629C2.51357 18.0702 0.794565 12.5205 2.88672 7.89336L1.54492 7.11867L5.70999 4.90457L5.87505 9.61867L4.62961 8.89962ZM13.4184 14.8311L10.59 12.0026L7.76157 14.8311L6.34736 13.4169L10.59 9.17422L13.4184 12.0026L16.2469 9.17422L17.6611 10.5884L13.4184 14.8311Z'
            fill='rgba(255,255,255,1)'
          />
        </svg>
      ),
      name: 'Manage Wallet',
      href: 'manage',
    },
  ]

  return (
    <div className='z-[100] flex w-full flex-col'>
      <div className='flex items-center justify-between w-11/12'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='relative flex h-14 w-16 -mt-2'>
              <span className='flex items-center ml-14'>
                <Image
                  alt='nft project logo'
                  src='/logo.svg'
                  height={180}
                  width={180}
                />
                <span className='font-bold text-white text-lg inline whitespace-nowrap'>Healcy Way</span>
              </span>
            </div>
          </Link>
        </div>
        {/* Links */}
        <div className='hidden lg:flex'>
          <div className='space-x-10'>
            {desktop.map((link) => (
              <span
                key={link.name}
                className='text-gray-300 transition duration-300 hover:text-white link'
              >
                <Link href={link.href}>{link.name}</Link>
              </span>
            ))}
          </div>
        </div>

        {/* SocialMedia */}
        <div className='lg:inline-flex hidden'>
          <Connect />
        </div>

        {/* Mobile menu */}
        <div className='inline-flex lg:hidden'>
          <div
            onClick={handleClick}
            className='cursor-pointer rounded-full bg-cr-orange p-3 shadow-lg shadow-white/10 transition-colors hover:bg-cr-gray'
          >
            {!mobile && (
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
            )}
            {mobile && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width={32}
                height={32}
              >
                <path
                  d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                  fill='rgba(255,255,255,1)'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={`${mobile ? 'menu-drop' : 'hidden'} lg:hidden`}>
        <div className='relative z-50 flex w-full flex-col space-y-4 bg-gray-800 px-6 py-8 rounded-md shadow-xl shadow-slate-900 divide-y divide-gray-700'>
          <h4 className='mb-2 text-lg text-gray-400 '>
            {/* steps */}
            <ul
              data-te-stepper-init=''
              className='relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out'
            >
              {/*First item*/}
              <li
                data-te-stepper-step-ref=''
                data-te-stepper-step-active=''
                className='w-[4.5rem] flex-auto'
              >
                <div
                  data-te-stepper-head-ref=''
                  className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:content-[''] focus:outline-none after:bg-neutral-600 hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref=''
                    className='my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]'
                  >
                    1
                  </span>
                  <span
                    data-te-stepper-head-text-ref=''
                    className='font-medium after:flex after:text-[0.8rem] after:content-[data-content] text-neutral-300'
                  >
                    Level 1
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref=''
                  className='absolute w-full p-4 transition-all duration-500 ease-in-out'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </li>
              {/*Second item*/}
              <li data-te-stepper-step-ref='' className='w-[4.5rem] flex-auto'>
                <div
                  data-te-stepper-head-ref=''
                  className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1  after:content-['']  focus:outline-none before:bg-neutral-600 after:bg-neutral-600 hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref=''
                    className='my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-green-400 text-sm font-medium text-[#40464f]'
                  >
                    2
                  </span>
                  <span
                    data-te-stepper-head-text-ref=''
                    className='after:flex after:text-[0.8rem] after:content-[data-content] text-neutral-300'
                  >
                    Level 2
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref=''
                  className='absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out'
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              {/*Third item*/}
              <li data-te-stepper-step-ref='' className='w-[4.5rem] flex-auto'>
                <div
                  data-te-stepper-head-ref=''
                  className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1  before:content-['']  focus:outline-none before:bg-neutral-600 after:bg-neutral-600 hover:bg-[#3b3b3b]"
                >
                  <span
                    data-te-stepper-head-icon-ref=''
                    className='my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]'
                  >
                    3
                  </span>
                  <span
                    data-te-stepper-head-text-ref=''
                    className='after:flex after:text-[0.8rem] after:content-[data-content] text-neutral-300'
                  >
                    Level 3
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref=''
                  className='absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out'
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </div>
              </li>
            </ul>
          </h4>
          {navigation.map((link) => (
            <span
              key={link.name}
              className='text-gray-300 transition duration-300 hover:text-white  pt-4 flex items-center gap-x-2'
            >
              <link.icon
                className='h-6 w-6 hover:text-purple-800'
                aria-hidden='true'
              />
              <Link href={link.href}>{link.name}</Link>
            </span>
          ))}
          <div className='flex items-center pt-4 space-x-4'>
            {/* SocialMedia */}
            {mobile && <Connect />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
