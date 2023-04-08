/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TopSellers = () => {
  const items = [
    {
      image: 'author1.png',
      name: 'ox_dox100',
      price: '70',
    },
    {
      image: 'author14.png',
      name: 'ox_dox100',
      price: '70',
    },
    {
      image: 'author15.png',
      name: 'ox_dox100',
      price: '70',
    },
    {
      image: 'author16.png',
      name: 'ox_dox100',
      price: '70',
    },
    {
      image: 'author17.png',
      name: 'ox_dox100',
      price: '70',
    },
    {
      image: 'author18.png',
      name: 'ox_dox100',
      price: '70',
    },
  ]
  return (
    <>
      <div className='mb-6'>
        <h3 className='font-bold'>✨Top Sellers</h3>
        <img src='/line.svg' alt='line' />
      </div>
      <div className='flex flex-wrap md:gap-2 gap-5 justify-center md:justify-between'>
        {items.map((item) => (
          <div className='flex cursor-pointer' key={item.index + 1}>
            <img
              className='rounded inline object-cover mr-2'
              src={item.image}
              alt='l1.jpg'
            />
            <div className='flex flex-col'>
              <p className='text-sm text-white'>{item.name}</p>
              <small className='font-normal text-gray-200'>
                {item.price} $BIT
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TopSellers
