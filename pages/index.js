/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/global/Navbar'
import Head from 'next/head'
import Header from '@/components/global/Header'
import Stats from '@/components/home/Stats'
import Lanchpad from '@/components/home/Lanchpad'
import Footer from '@/components/global/Footer'


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
      <header className='hbg'>
        <nav className='w-11/12 px-4 md:px-0 mx-auto py-4 sm:py-12 md:py-6'>
          <Navbar />
        </nav>
        <div className='w-11/12 px-4 md:px-0 mx-auto my-32'>
          <Header />
        </div>
      </header>
      {/* Header-Info */}
      <div className='flex flex-wrap justify-between'>
        <div className='grid grid-cols-2 md:justify-items-start justify-items-center gap-x-32 gap-y-10 md:max-w-lg w-full my-24 md:ml-16'>
          <Stats />
        </div>
        <img className='barg' alt='nft' src='/stats.png' />
      </div>
      <main>
        <section id='launchpad' className='bg-[#00000026]'>
          <Lanchpad />
        </section>
      </main>
      <Footer/>
    </>
  )
}
