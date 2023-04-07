/* eslint-disable @next/next/no-img-element */

import CollectionItems from "./CollectionItems"

const CollectionBanner = () => {
const items = [
  {
    image: 'product34.jpg',
    name: 'Arox City',
    price: '$15 BIT',
  },

  {
    image: 'product39.jpg',
    name: 'Dox City',
    price: '$15 BIT',
  },

  {
    image: 'product36.jpg',
    name: 'Ror City',
    price: '$13 BIT',
  },

  {
    image: 'product37.jpg',
    name: 'Arox City',
    price: '$12 BIT',
  },
  {
    image: 'product35.jpg',
    name: 'Arox City',
    price: '$15 BIT',
  },

  {
    image: 'product38.jpg',
    name: 'Dox City',
    price: '$15 BIT',
  },

  {
    image: 'product65.jpg',
    name: 'Ror City',
    price: '$13 BIT',
  },

  {
    image: 'product67.jpg',
    name: 'Arox City',
    price: '$12 BIT',
  },
]
  return (
    <>
      <main classNameName='collection'>
        <>
          {/* component */}
          <div
            className='bg-cover bg-center  h-auto text-white py-32 px-10 object-fill'
            style={{
              backgroundImage: 'url(collection.webp)',
            }}
          ></div>
          <div className='w-full space-y-2 text-center'>
            <img
              className='rounded-full border-4 border-green-500 p-1 object-cover w-[150px] h-[150px] mx-auto -mt-20'
              src='avatar_3.png'
              alt='product34'
            />
            <h3 className='font-bold'>NFT PRO</h3>
            <p className='text text-cyan-500'>Created by @0X_Porox</p>
          </div>
          {/* stats */}
          <div className='mx-auto text-center  w-full mt-4 mb-8 inline-flex flex-wrap items-center justify-center rounded-xl '>
            <a
              className='mt-4 w-1/2 rounded-l-xl -r py-4 hover:shadow-md sm:w-32'
              href='/collection/avatar_1#'
            >
              <div className='text-jacarta-700 mb-1 text-base font-bold text-white'>
                7.2K
              </div>
              <div className='text-2xs text-jacarta-400 font-medium tracking-tight'>
                Items
              </div>
            </a>
            <a
              className='mt-4 w-1/2 rounded-l-xl -r py-4 hover:shadow-md sm:w-32'
              href='/collection/avatar_1#'
            >
              <div className='text-jacarta-700 mb-1 text-base font-bold text-white'>
                5.3K
              </div>
              <div className='text-2xs text-jacarta-400 font-medium tracking-tight'>
                Owners
              </div>
            </a>
            <a
              className='mt-4 w-1/2 rounded-l-xl -r py-4 hover:shadow-md sm:w-32'
              href='/collection/avatar_1#'
            >
              <div className='text-jacarta-700 mb-1 text-base font-bold text-white'>
                2.55
              </div>
              <div className='text-2xs text-jacarta-400 font-medium tracking-tight'>
                Floor Price
              </div>
            </a>
            <a
              className='mt-4 w-1/2 rounded-l-xl -r py-4 hover:shadow-md sm:w-32'
              href='/collection/avatar_1#'
            >
              <div className='text-jacarta-700 mb-1 text-base font-bold text-white'>
                17.2K
              </div>
              <div className='text-2xs text-jacarta-400 font-medium tracking-tight'>
                Volume Traded
              </div>
            </a>
          </div>

          <p className='text-center max-w-[500px] mx-auto text-cyan-500'>
            Unique, Fully creative And Built To Unite The Design Multiverse.
            Designed And Styled By Digimental. Nice and best price NFTS.
          </p>

          {/* stats */}
          <div className='flex flex-wrap md:grid grid-cols-4 gap-2 md:justify-between justify-center'>
            {items.map((item) => (
              <CollectionItems key={item.index} {...item} />
            ))}
          </div>
        </>
      </main>
    </>
  )
}

export default CollectionBanner
