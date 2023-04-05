/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NftCard = () => {
  return (
    <div className='group relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit'>
      <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg -mt-1 group-hover:-mt-2 -ml-1 group-hover:-ml-2 h-[98%] w-[98%] -z-1 transition-all duration-500' />
      <div className='relative overflow-hidden'>
        <div className='relative overflow-hidden rounded-lg'>
          <img
            src='assets/images/items/2.gif'
            className='rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500'
            alt=''
          />
        </div>
        <div className='absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500'>
          <a
            href='item-detail.html'
            className='btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white'
          >
            <i className='mdi mdi-lightning-bolt' /> Buy Now
          </a>
        </div>
        <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
          <a
            href='javascript:void(0)'
            className='btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white'
          >
            <i className='mdi mdi-plus' />
          </a>
        </div>
        <div className='absolute bottom-2 right-0 left-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full'>
          <i className='uil uil-clock align-middle mr-1' />{' '}
          <small id='auction-item-1' className='font-bold'>
            00 : 00 : 00 : 00
          </small>
        </div>
      </div>
      <div className='mt-3'>
        <div className='flex items-center'>
          <img
            src='assets/images/avatar/2.jpg'
            className='rounded-full h-8 w-8'
            alt=''
          />
          <a
            href='creator-profile.html'
            className='ml-2 text-[15px] font-medium text-slate-400 hover:text-violet-600'
          >
            @CutieGirl
          </a>
        </div>
        <div className='my-3'>
          <a
            href='item-detail.html'
            className='font-semibold hover:text-violet-600'
          >
            Windchime #768
          </a>
        </div>
        <div className='flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700'>
          <div>
            <span className='text-[16px] font-medium text-slate-400 block'>
              Price
            </span>
            <span className='text-[16px] font-semibold block'>
              <i className='mdi mdi-ethereum' /> 3.5 ETH
            </span>
          </div>
          <div>
            <span className='text-[16px] font-medium text-slate-400 block'>
              Highest Bid
            </span>
            <span className='text-[16px] font-semibold block'>
              <i className='mdi mdi-ethereum' /> 3.55 ETH
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard