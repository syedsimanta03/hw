/* eslint-disable @next/next/no-img-element */

import Gamecard from '../global/Gamecard'

const Powered = () => {
  const items = [
    {
      image: 'l1.jpg',
      name: 'Arox City',
    },

    {
      image: 'l2.jpg',
      name: 'Arox City',
    },
    {
      image: 'l2.jpg',
      name: 'Arox City',
    },

    {
      image: 'l3.jpg',
      name: 'Arox City',
    },

    {
      image: 'l2.jpg',
      name: 'Arox City',
    },
  ]
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h3 className='font-bold mb-10'>GAME ON by Mantle</h3>
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
      </div>

      <div className='flex flex-wrap md:justify-between justify-center gap-y-4'>
        {items.map((item) => (
          <Gamecard key={item.index} {...item} />
        ))}
      </div>
      <button
        type='button'
        className='flex items-center mx-auto py-2.5 px-5 mt-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
      >
        View All
      </button>
    </>
  )
}

export default Powered
