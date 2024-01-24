import React from 'react'
import EasilyNav from '../../components/home/EasilyNav'
import ProperityForSale from '../../components/home/ProperityForSale'
import Hero from '../../components/home/Hero'
import MainLayout from '../../layouts/MainLayout'
import BasedOnHistory from '../../components/home/BasedOnHistory'

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <div className='w-full flex justify-center items-center mt-[-30px]'>
        <EasilyNav/>
      </div>
      <div className='space-y-6 py-6'>
        <ProperityForSale/>
        <BasedOnHistory/>        
      </div>
        

    </MainLayout>
  )
}

export default Home