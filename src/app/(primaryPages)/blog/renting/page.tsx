'use client'

import React from 'react'
import Link from 'next/link'
import { GridContainer3 } from '@/components/shared/containers/container'
import Card from '@/components/blog/card'
import ReadMore from '@/components/blog/readMore/ReadMore'
import BecomeASeller from '@/components/blog/becomeASeller/BecomeASeller'
import {usePathname} from 'next/navigation';
import BlogNav from '@/components/blog/BlogNav'
import FeaturedArticles from '@/components/blog/FeaturedArticles/FeaturedArticles'

const Renting = () => {
  return <div className='font-outfit'>
    <BlogNav />
    {/* hero component */}
    <div className='h-[515px] w-full relative flex text-center'><img src="/images/rentingBlog.png" alt="renting hero image" className='relative  w-full'/>
        <div className='absolute z-10 self-center w-full' >
            <div className='text-[#FBFBFC] text-[65px] sm:text-[88px] pt-0'>Renting</div>
            <div className='text-[#FDE68A] text-xl sm:text-2xl max-w-[500px] mx-auto'>Get the best deals when renting, be it event centers, house, land, shops etc</div>
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

export default Renting;