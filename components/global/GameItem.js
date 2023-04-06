/* eslint-disable @next/next/no-img-element */
import React from 'react'

const GameItem = ({ image, author, price, earned, up, down }) => {
  return (
    <div className='flex gap-y-2 justify-between p-4 rounded-lg shadow bg-gray-800 border-gray-700 shadow-purple-900 hover:shadow-green-900 w-full cursor-pointer'>
      <div className='flex'>
        <img
          className='rounded-full inline object-cover w-10 h-10 mr-2'
          src={image}
          alt={image}
        />
        <div className='flex flex-col'>
          <p className='text-sm text-white'>@{author}</p>
          <small className='font-normal text-gray-500'>${price}</small>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-sm text-white'>${earned}</p>
        {up && <small className='font-normal text-green-500'>%{up}</small>}
        {down && <small className='font-normal text-red-500'>%{down}</small>}
      </div>
    </div>
  )
}

export default GameItem