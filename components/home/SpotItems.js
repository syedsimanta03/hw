import React from 'react'
import Spot from '../global/Spot'
/* eslint-disable @next/next/no-img-element */

const SpotItems = () => {
  const items = [
    {
      image: 'l1.jpg',
      time: ' 18h : 17m : 29s',
      timeLabel: 'Time Remaining',
      price: '124 BIT',
      priceLabel: 'Highest Bid',
    },
    {
      image: 'l2.jpg',
      time: ' 15h : 17m : 29s',
      timeLabel: 'Time Remaining',
      price: '144 BIT',
      priceLabel: 'Highest Bid',
    }
  ]
  return (
    <div className='flex justify-center md:justify-around flex-wrap'>
      {items.map((item) => (
        <Spot key={item.index+1} {...item} />
      ))}
    </div>
  )
}

export default SpotItems
