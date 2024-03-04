import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogNav = () => {

    const pathname = usePathname()
    
  return (
    <nav className='bg-[#140014] h-[95px] px-8 hidden sm:block lg:mt-24 xl:mt-20'> 
    <ul className='flex flex-row h-full pt-5'>
        <li  className={`text-white mr-5 mt-5 hover:border-b-2 h-fit pb-2 ${pathname === '/blog/spotlight' ? 'border-b-2 border-b-[#79007B]' : ''} `}
        >
            <Link href="/blog/spotlight" >Spotlight</Link>
        </li>
        <li className={`text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2 ${pathname === '/blog/buying&selling' ? 'border-b-2 border-b-[#79007B]' : ''} `}>
            <Link href="/blog/buying&selling" >Buying & Selling</Link>
        </li>
        <li className={`text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2 ${pathname === '/blog/renting' ? 'border-b-2 border-b-[#79007B]' : ''} `}>
            <Link href="/blog/renting" >Renting</Link>
        </li>
        <li className={`text-white mx-5 mt-5 hover:border-b-2 h-fit pb-2 ${pathname === '/blog/tips&advice' ? 'border-b-2 border-b-[#79007B]' : ''} `}>
            <Link href="/blog/tips&advice" >Tips & Advice</Link>
        </li>
    </ul>
</nav>
  )
}

export default BlogNav
