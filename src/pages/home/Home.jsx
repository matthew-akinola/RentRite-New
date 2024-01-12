import React from 'react'
import EasilyNav from '../../components/home/EasilyNav'
import ProperityForSale from '../../components/home/ProperityForSale'
import Hero from '../../components/home/Hero'
import MainLayout from '../../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <div className='w-full flex justify-center items-center mt-[-30px]'>
        <EasilyNav/>
      </div>
        
        <ProperityForSale/>
    </MainLayout>
  )
}

export default Home