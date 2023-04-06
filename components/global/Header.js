/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Stats from '../home/Stats'

export default function Example() {
  return (
    <>
      <div className='mx-auto flex flex-wrap items-center md:grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 md:items-start pb-10'>
        {/* Header-Text */}
        <div>
          <p className='inline uppercase font-bold slide-up text-cyan-500'>
            SECURE & BEST PRICE NFT ARTS
          </p>
          <img
            className='mx-auto hidden md:inline ml-24 animate-bounce'
            src='/slider-2.png'
            alt='slider-2'
          />
          <h1 className='font-bold text-2xl sm:text-5xl lg:text-6xl mb-8 mt-4 whitespace-nowrap slide-up title'>
            Discover the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              NFT
              <br />
              World&nbsp;
            </span>
            collect & sell
            <br />
            Your art
            <img
              className='hidden sm:inline ml-2 slide-up'
              src='/slider-3.png'
              alt='slider-2'
            />
          </h1>
          <p className='slide-up one '>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam ullamco est sit aliqua dolor do amet sint.
          </p>
          <div className='my-10 space-x-4 slide-up oneThree text-center sm:text-left'>
            <Link href='/'>
              <button className='bg-gradient-to-r from-lime-500 lime-600 to-lime-600 mb-4 sm:mb-0 focus:ring ring-green-800 hover:bg-purple-500 hover:shadow-md shadow-green-500 shadow px-4 font-bold py-4 rounded-full text-cr-gray'>
                Explore Now
              </button>
            </Link>
            <Link href='https://www.discord.com'>
              <button className='focus:ring ring-orange-800 hover:bg-cr-orange hover:shadow-md shadow-cr-orange border border-1 border-white px-4 font-bold py-3 rounded-full text-white'>
                <svg
                  className='inline w-8 mr-1 h-auto'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#ebeced'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='9' cy='12' r='1' />
                  <circle cx='15' cy='12' r='1' />
                  <path d='M7.5 7.5c3.5 -1 5.5 -1 9 0' />
                  <path d='M7 16.5c3.5 1 6.5 1 10 0' />
                  <path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5' />
                  <path d='M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5' />
                </svg>
                Join US
              </button>
            </Link>
          </div>
        </div>
        {/* Header-img */}
        <div className='w-full flex justify-end'>
          <div className='slide-up' alt='nft-header' />

          <img
            className='hidden lg:block slide-up himgs'
            src='/himgs.svg'
            alt='himgs'
          />
        </div>
      </div>
    </>
  )
}
