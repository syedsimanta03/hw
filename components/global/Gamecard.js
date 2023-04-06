/* eslint-disable @next/next/no-img-element */


const Gamecard = ({name, image}) => {
  return (
    <div className='max-w-[250px]  rounded-lg shadow hover:shadow-lg shadow-purple-900 hover:shadow-green-900 cursor-pointer glass border-gray-700 hover:scale-105 transition-transform duration-300'>
      <a href='#'>
        <img className='rounded-3xl object-cover w-full p-4' src={image} alt='l1' />
      </a>
        <a href='#'>
          <h4 className='mb-2 text-xl text-center font-bold tracking-tight text-cyan-500'>
            {name}
          </h4>
        </a>
    </div>
  )
}

export default Gamecard