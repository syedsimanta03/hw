/* eslint-disable @next/next/no-img-element */

const NewCollectionItem = ({ name, price, image }) => {
  return (
    <div className='flex flex-col items-center m-2 text-center cursor-pointer hover:scale-105  transition-transform duration-300'>
      <img
        className='rounded-full w-[150px] max-auto'
        src={image}
        alt={image}
      />
      <h3 className='text-xl font-bold text-cyan-500'>{name}</h3>
      <p className='text-lg font-bold'>${price}</p>
    </div>
  )
}

export default NewCollectionItem
