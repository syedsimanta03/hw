/* eslint-disable @next/next/no-img-element */
const stats = [
  { info: '138,566 $BIT', label: 'Volume 24h' },
  { info: '148,566 $BIT', label: 'Volume Total' },
  { info: '$200000.210', label: '$BIT Token' },
  { info: '30,875', label: '$Mantle network' },
]

const Stats = () => {
  return (
    <>
      {stats.map((stat, index) => (
        <div className='flex flex-col text-center sm:text-left' key={index}>
          <h3 className='font-bold text-lg 2xl:text-3xl sm:text-2xl sm:whitespace-nowrap slide-up one text-cyan-500'>
            {stat.info}
          </h3>
          <h4 className='text-md sm:text-2xl text-cr-orange sm:whitespace-nowrap slide-up oneThree'>
            {stat.label}
          </h4>
        </div>
      ))}
       
    </>
  )
}

export default Stats
