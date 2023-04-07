import CollectionBanner from '@/components/collection/CollectionBanner'
import Footer from '@/components/global/Footer'
import Navbar from "@/components/global/Navbar"

const collection = () => {
  return (
    <>
      <Navbar />
      <section id='collection' className='w-11/12 px-4 md:px-0 mx-auto game mb-32'>
        <CollectionBanner />
      </section>
      <Footer/>
    </>
  )
}

export default collection