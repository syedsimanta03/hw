/* eslint-disable @next/next/no-img-element */

import NewCollectionItem from "../global/NewCollectionItem"


const NewCollection = () => {
 const items = [
   {
     name: 'Robin Team',
     price: '124',
     image: 'product34.jpg',
   },
   {
     name: 'Artodox',
     price: '124',
     image: 'product36.jpg',
   },
   {
     name: 'Teamdr',
     price: '124',
     image: 'product39.jpg',
   },
   {
     name: 'Dreamy',
     price: '124',
     image: 'product37.jpg',
   },
   {
     name: 'Arthodox',
     price: '124',
     image: 'product42.jpg',
   },
   {
     name: 'Paradox',
     price: '124',
     image: 'product67.jpg',
   },
 ]
  return (
    <>
      <div className='flex justify-between py-28 mb-24 w-11/12 px-4 md:px-0 mx-auto '>
        <div>
          <h3 className='font-bold'>New Collection</h3>
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

      <div className='flex flex-wrap justify-center md:justify-between mb-24 w-11/12 px-4 md:px-0 mx-auto '>
        {/* c1 */}
        {items.map((item) => (
          <div className='text-center' key={item.index}>
            <NewCollectionItem {...item} />
          </div>
        ))}
      </div>
        <button
          type='button'
          className='flex items-center mx-auto py-2.5 px-5 my-10 text-sm font-medium rounded-full hover:text-gray-500 focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700'
        >
          View All
        </button>
    </>
  )
}

export default NewCollection