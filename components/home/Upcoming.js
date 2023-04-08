/* eslint-disable @next/next/no-img-element */
import React from 'react'
import UpcomingItem from '../global/UpcomingItem'

const Upcoming = () => {
  const items = [
    {
      image: '27.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
    {
      image: '28.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
    {
      image: '32.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
    {
      image: '33.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
    {
      image: '33.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
    {
      image: '33.png',
      name: 'Fireman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '70',
      time: '2: 04: 30',
      author: '@SYm_ox',
    },
  ]
  return (
    <>
      <div>
        <h3 className='font-bold'>Upcoming</h3>
        <img src='/line.svg' alt='line' />
      </div>
      <div className='flex overflow-x-auto gap-2 md:justify-between'>
        {items.map((item) => (
          <UpcomingItem key={item.index + 1} {...item} />
        ))}
      </div>
    </>
  )
}

export default Upcoming
