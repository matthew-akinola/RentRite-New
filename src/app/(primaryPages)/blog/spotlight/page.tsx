'use client'

import React from 'react'
import Link from 'next/link'
import { GridContainer3 } from '@/components/shared/containers/container'
import Card from '@/components/blog/card'
import ReadMore from '@/components/blog/readMore/ReadMore'
import BecomeASeller from '@/components/blog/becomeASeller/BecomeASeller'
import BlogNav from '@/components/blog/BlogNav'
import FeaturedArticles from '@/components/blog/FeaturedArticles/FeaturedArticles'

const Spotlight = () => {
    
  return <div className=''>
    <BlogNav />
    {/* hero component */}
    <div className='h-[515px] w-full relative flex text-center'><img src="/images/spotlight_bg.png" alt="spotlight hero image" className='relative  w-full object-cover'/>
        <div className='absolute z-10 self-center w-full' >
            <div className='text-[#FBFBFC] text-[65px] sm:text-[88px] pt-0'>Spotlight</div>
            <div className='text-[#FDE68A] text-xl sm:text-2xl'>Let us guide your real estate journey</div>
        </div>
    </div>
    {/* featured section */}
    <section className='px-8 pt-8 bg-white text-[#161518] pb-3'>
        <div className="container mx-auto">
            <h2 className='font-bold text-2xl border-b-[1px] border-[#E4CCE5] pb-3'>Featured</h2>
            {/* blogpost Card */}
            <FeaturedArticles />
        </div>
    </section>

    <section className='bg-white pt-16 px-8'>
        <div className="container mx-auto">
            <h2 className='text-[#161518] text-2xl font-bold border-b-2 border-b-[#E4CCE5] pb-3 '>Read More</h2>
            <ReadMore />
        </div>
    </section>
    <section className='h-[326px] px-8 bg-[#F7F7F7] mb-14 sm:mb-0'>
        <BecomeASeller />
    </section>
  </div>
  
}

export default Spotlight;