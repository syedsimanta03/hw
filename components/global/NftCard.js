/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NftCard = ({image, time, name, author, price}) => {
  return (
    <div className='max-w-[350px]  rounded-lg shadow bg-gray-800 border-gray-700'>
      <a href='#'>
        <img className='rounded object-cover w-full p-4' src={image} alt='l1' />
      </a>
      <div className='p-5'>
        <p
          href='#'
          className='flex w-32 -mt-24 shadow-xl mx-auto items-center px-3 py-2 text-sm font-medium text-center text-black glass'
        >
          {time}
        </p>
        <a href='#'>
          <h4 className='mb-2 text-xl font-bold tracking-tight text-cyan-500 my-12'>
            {name}
          </h4>
        </a>
        <div className='flex justify-between mt-8'>
          <div className='flex'>
            <img
              className='rounded-full inline object-cover w-10 h-10 mr-2'
              src='l1.jpg'
              alt='l1'
            />
            <div className='flex flex-col'>
              <small className='font-normal text-gray-500'>Creator</small>
              <p className='text-sm text-white'>{author}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <small className='font-normal text-gray-500'>Price</small>
            <p className='mb-3 text-sm text-white'>{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard