/* eslint-disable @next/next/no-img-element */
const CollectionItems = ({image, name, price}) => {
  return (
    <div className='max-w-[250px] rounded-lg shadow hover:shadow-lg shadow-purple-900 hover:shadow-green-900 cursor-pointer glass border-gray-700 transition-transform duration-300 mt-32'>
      <a href='#'>
        <img
          className='rounded-lg object-cover w-full'
          src={image}
          alt={image}
        />
      </a>
      <a href='#' className='flex justify-between items-center p-4'>
        <h4 className='mb-2 text-md font-bold tracking-tight text-cyan-500'>
          {name}
        </h4>
        <div className='text-md'>{price}</div>
      </a>
      <button
        type='button'
        className='flex justify-center mx-auto focus:outline-none text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-4 bg-green-600 hover:bg-green-700 focus:ring-green-800'
      >
        Buy Now
      </button>
    </div>
  )
}

export default CollectionItems
