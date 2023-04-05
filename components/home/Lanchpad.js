/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NftCard from '../global/NftCard'

const Lanchpad = () => {
  return (
    <div className='w-11/12 px-4 md:px-0 mx-auto py-32 flex justify-between'>
      <div>
        <h3 className='font-bold'>Lanchpad</h3>
        <img src='/line.svg' alt='line' />
      </div>
      <div className='flex gap-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <path
            d='M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z'
            fill='rgba(98,66,205,1)'
          ></path>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <path
            d='M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z'
            fill='rgba(98,66,205,1)'
          ></path>
        </svg>
      </div>
      {/* card */}
      <NftCard/>
    </div>
  )
}

export default Lanchpad
