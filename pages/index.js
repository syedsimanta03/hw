/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/global/Navbar'
import Head from 'next/head'
import Header from '@/components/global/Header'
import Stats from '@/components/home/Stats'
import Launchpad from '@/components/home/Launchpad'
import Footer from '@/components/global/Footer'
import Game from '@/components/home/Game'
import SpotItems from '@/components/home/SpotItems'
import Powered from '@/components/home/Powered'
import Popular from '@/components/home/Popular'
import NewCollection from '@/components/home/NewCollection'
import Upcoming from '@/components/home/Upcoming'
import TopSellers from '@/components/home/TopSellers'


export default function Home() {
  return (
    <>
      <Head>
        <title>HW</title>
        <meta
          name='description'
          content='Discover NFT world. Buy & Sell your NFTS. Holders of this NFT will receive exclusive benefits in the future.'
        />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <header className='hbgxxx'>
        <nav className='mx-auto py-4 sm:py-12 md:py-6'>
          <Navbar />
        </nav>
        <div className='w-11/12 px-4 md:px-0 mx-auto my-10'>
          <Header />
        </div>
      </header>
      {/* Header-Info */}
      {/* <div className='flex flex-wrap justify-between'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:justify-items-start justify-items-center gap-x-32 gap-y-10 md:max-w-lg w-full my-24 md:ml-16'>
          <Stats />
        </div>
        <img className='barg' alt='nft' src='/stats.png' />
      </div> */}
      <main>
        <section id='spot' className=' w-11/12 px-4 md:px-0 mx-auto'>
          <SpotItems />
        </section>
        <section id='TopSellers' className='w-11/12 px-4 md:px-0 mx-auto my-10'>
          <TopSellers />
        </section>
        <section id='Upcoming' className='w-11/12 px-4 md:px-0 mx-auto'>
          <Upcoming />
        </section>
        <section id='launchpad'>
          <Launchpad />
        </section>
        <section id='game' className='w-11/12 px-4 md:px-0 mx-auto mt-10'>
{/*           <img
            className='flex justify-end ml-auto'
            alt='nft'
            src='/ellipse1.png'
          /> */}
          <Game />
         {/*  <img
            className='flex justify-start mr-auto'
            alt='nft'
            src='/ellipse2.png'
          /> */}
        </section>
        <section
          id='powered'
          className='mb-24 w-11/12 px-4 md:px-0 mx-auto game'
        >
          <Powered />
        </section>
        <section id='Popular' className='popularxx'>
          <Popular />
        </section>
        <section id='New' className='New'>
          <NewCollection />
        </section>
      </main>
      <Footer />
    </>
  )
}
