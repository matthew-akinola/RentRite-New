import React from 'react'
import Link from 'next/link'
import { GridContainer3 } from '@/components/shared/containers/container'
import Card from '@/components/blog/card'

const Spotlight = () => {
  return <div className=''>
    <nav className='bg-[#140014] h-[95px] px-8'> 
        <ul className='flex flex-row h-full pt-5'>
            <li  className='text-white mr-5 mt-5  hover:border-b-2 h-fit pb-2'
            >
                <Link href="" >Spotlight</Link>
            </li>
            <li className='text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2'>
                <Link href="" >Buying & Selling</Link>
            </li>
            <li className='text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2'>
                <Link href="" >Renting</Link>
            </li>
            <li className='text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2'>
                <Link href="" >Tips & Advice</Link>
            </li>
        </ul>
    </nav>
    {/* hero component */}
    <div className='h-[515px] w-full relative flex text-center'><img src="/images/spotlight_bg.png" alt="spotlight hero image" className='relative  w-full'/>
        <div className='absolute z-10 self-center w-full' >
            <div className='text-[#FBFBFC] text-[88px] pt-0'>Spotlight</div>
            <div className='text-[#FDE68A] text-2xl'>Let us guide your real estate journey</div>
        </div>
    </div>
    {/* featured section */}
    <section className='px-8 pt-8 bg-white text-[#161518] pb-3'>
        <h2 className='font-bold text-2xl border-b-[1px] border-[#E4CCE5] pb-3'>Featured</h2>
        {/* blogpost Card */}
        <div className='mt-4'>
            <GridContainer3>
                <Card card={{'thumbnail':'/images/featuredBlogOne.png', 'tittle': '2022 Africa Real Estate review', 'text':'In 2022, the real estate industry in Africa saw a 500% growth rate. Join us as we analyse how to benefit in 2023.', 'url':''}} />
                <Card card={{'thumbnail':'/images/featuredBlogTwo.png', 'tittle': 'Letter from our CEO', 'text':'Real estate remains the one of the few industries yet to be affected by recession. Let’s discuss this & moving forward.', 'url':''}} />
                <Card card={{'thumbnail':'/images/featuredBlogOne.png', 'tittle': '2022 Africa Real Estate review', 'text':'In 2022, the real estate industry in Africa saw a 500% growth rate. Join us as we analyse how to benefit in 2023.', 'url':''}} />
                <Card card={{'thumbnail':'/images/featuredBlogTwo.png', 'tittle': 'Letter from our CEO', 'text':'Real estate remains the one of the few industries yet to be affected by recession. Let’s discuss this & moving forward.', 'url':''}} />
            </GridContainer3>
        </div>
    </section>
  </div>
  
}

export default Spotlight;