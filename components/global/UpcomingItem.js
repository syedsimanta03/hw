/* eslint-disable @next/next/no-img-element */

const UpcomingItem = ({image,name,price,text,time, author}) => {
  return (
    <>
      
      <div className='flex items-center justify-between cursor-pointer'>
        <div className='my-10 w-72 glass p-5 rounded-md shadow-xl'>
          <img  className='h-[200px] max-auto flex items-center text-center' src={image}  alt='gm' />
          <h3 className='text-[22px] font-bold mt-3'>{name}</h3>
          <p className='text-gray-200 text-sm mb-2'>
            {text}
          </p>
          <div className='flex justify-between items-center text-sm'>
            <p className='text-cyan-400 font-bold'>
              <i className='fab fa-ethereum' /> {price} $BIT
            </p>
            <p className='text-gray-200'>🕝 {time}</p>
          </div>
          <p className='bg-gray-600 h-[0.5px] w-full my-2' />
          <div className='flex items-center'>
            <img
              src='https://ik.imagekit.io/bayc/assets/bayc-footer.png'
              alt='BAYC'
              className='h-8 w-8 border border-white rounded-full mr-2'
            />
            <p className='text-gray-200 text-[12px]'>
            Created by{' '}
              <a
                href='https://opensea.io/collection/boredapeyachtclub'
                target='_black'
                rel='no-opener'
                className='text-white font-bold'
              >
                {author}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingItem
