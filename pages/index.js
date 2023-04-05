import Navbar from '@/components/global/Navbar'
import Head from 'next/head'

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
      <nav className='w-11/12 px-4 md:px-0 mx-auto py-6 sm:py-12 md:py-10'>
        <Navbar />
      </nav>
      <main></main>
    </>
  )
}
