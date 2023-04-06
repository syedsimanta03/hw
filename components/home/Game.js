/* eslint-disable @next/next/no-img-element */
import React from 'react'
import GameItem from '../global/GameItem'

const Game = () => {
  const items = [
    {
      image: 'l1.jpg',
      author: 'Hakamurtaa',
      price: '124.123',
      earned: '12k',
      up: '2',
    },

    {
      image: 'l2.jpg',
      author: 'Marwa',
      price: '124.123',
      earned: '12k',
      down: '3',
    },

    {
      image: 'l3.jpg',
      author: 'Sujuka',
      price: '124.123',
      earned: '12k',
      up: '5',
    },
    {
      image: 'l3.jpg',
      author: 'Sujuka',
      price: '124.123',
      earned: '12k',
      up: '5',
    },
  ]
  return (
    <div className='flex flex-wrap justify-center md:justify-between'>
      {/* c1 */}
      <div className='flex flex-col w-[300px]'>
        <h4 className='mb-10 text-xl font-bold tracking-tight text-cyan-500 my-12'>
          Top Games(24h Vol)
        </h4>
        <div className='flex flex-col gap-y-2'>
          {items.map((item) => (
            <GameItem key={item.index} {...item} />
          ))}
        </div>
        <button
          type='button'
          className='flex items-center mx-auto py-2.5 px-5 my-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
        >
          View All
        </button>
      </div>
      {/* c1 */}
      <div className='flex flex-col w-[300px]'>
        <h4 className='mb-10 text-xl font-bold tracking-tight text-cyan-500 my-12'>
          Top Games(Total Vol)
        </h4>
        <div className='flex flex-col gap-y-2'>
          {items.map((item) => (
            <GameItem key={item.index} {...item} />
          ))}
        </div>
        <button
          type='button'
          className='flex items-center mx-auto py-2.5 px-5 my-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
        >
          View All
        </button>
      </div>
      {/* c1 */}
      <div className='flex flex-col w-[300px]'>
        <h4 className='mb-10 text-xl font-bold tracking-tight text-cyan-500 my-12'>
          Most Followed Games
        </h4>
        <div className='flex flex-col gap-y-2'>
          {items.map((item) => (
            <GameItem key={item.index} {...item} />
          ))}
        </div>
        <button
          type='button'
          className='flex items-center mx-auto py-2.5 px-5 my-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
        >
          View All
        </button>
      </div>
    </div>
  )
}

export default Game
