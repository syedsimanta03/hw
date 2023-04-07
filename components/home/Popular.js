import PopularCollection from '../global/PopularCollection'

/* eslint-disable @next/next/no-img-element */
const Popular = () => {
  const items = [
    {
      name: 'Art Collection',
      image1: 'product34.jpg',
      image2: 'product39.jpg',
      image3: 'product36.jpg',
      image4: 'product37.jpg',
      image5: 'product39.jpg',
      image6: 'product36.jpg',
    },
    {
      name: 'Game Collection',
      image1: 'product34.jpg',
      image2: 'product37.jpg',
      image3: 'product36.jpg',
      image4: 'product34.jpg',
      image5: 'l2.jpg',
      image6: 'product36.jpg',
    },
    {
      name: 'Art Collection',
      image1: 'product42.jpg',
      image2: 'product67.jpg',
      image3: 'product36.jpg',
      image4: 'product34.jpg',
      image5: 'product39.jpg',
      image6: 'product36.jpg',
    },
  ]
  return (
    <>
      <div className='flex justify-between py-28 mb-24 w-11/12 px-4 md:px-0 mx-auto '>
        <div>
          <h3 className='font-bold'>Popular Collection</h3>
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
              d='M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12product342 16V13H16V11H12Z'
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
              d='M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16product346 12product342 8V11Z'
              fill='rgba(98,66,205,1)'
            ></path>
          </svg>
        </div>
      </div>

      <div className='flex flex-wrap justify-center md:justify-between mb-24 w-11/12 px-4 md:px-0 mx-auto '>
        {/* c1 */}
        {items.map((item) => (
          <div className='flex flex-col w-[400px]' key={item.index}>
            <div className='flex flex-col gap-y-2'>
              <h4 className='mb-10 text-xl font-bold text-center tracking-tight text-cyan-500 '>
                {item.name}
              </h4>
              <PopularCollection {...item} />
              <button
                type='button'
                className='flex items-center mx-auto py-2.5 px-5 my-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
              >
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Popular
