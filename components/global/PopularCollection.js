/* eslint-disable @next/next/no-img-element */


const PopularCollection = ({ image1, image2, image3, image4, image5, image6}) => {
  return (
    <div className='container mx-auto'>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image1}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image2}
            />
          </div>
          <div className='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image3}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image4}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image5}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center'
              src={image6}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCollection