/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Spot = ({ image, time, timeLabel, price, priceLabel }) => {
  return (
    <div className='w-[40%]'>
      <a href='#'>
        <img
          className='rounded-3xl object-cover w-full  h-[360px]'
          src={image}
          alt='l1'
        />
      </a>
      <div className='grid grid-cols-2 align-center max-w-[250px] text-black glass border border-gray-500 m-10 -mt-20 p-2 shadow-md'>
        <div className='flex flex-col'>
          <small className='font-bold text-md text-gray-800'>⏳{time}</small>
          <p className='text-sm text-black'>{timeLabel}</p>
        </div>
        <div className='flex flex-col ml-auto'>
          <small className='font-bold text-md text-gray-800'>{price}</small>
          <p className='mb-3 text-sm text-black'>{priceLabel}</p>
        </div>
        <div className='w-full col-span-2 hover:scale-105 transition-transform duration-300 cursor-pointer text-center rounded-2xl glass px-4 py-2 font-semibold shadow-lg shadow-white/10'>
          Place A Bid
        </div>
      </div>
    </div>
  )
}

export default Spot
