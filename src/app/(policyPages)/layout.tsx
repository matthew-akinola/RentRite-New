import React, {ReactNode} from 'react'
import Link from 'next/link'
import "@/app/globals.css";
import Footer from '@/components/common/footer/Footer';

interface PolicyLayoutProps {
    children: ReactNode;
}

const layout:React.FC<PolicyLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
       <body>
            <main className='bg-white'>
            <nav className='flex flex-row pb-2 border-b'>
                <ul className='px-3 sm:px-8 pt-3 flex flex-row w-full justify-center items-center'>
                    <li className=''>
                        <Link href='/' ><img src="/logo.svg" alt="Logo" /></Link>
                    </li>
                    <li className='ml-auto'>
                    <span className='text-[#8F2A91] text-base font-semibold' ><Link href='/privacypolicy'>Privacy policy</Link> | </span>
                    <span className=' font-medium text-base text-[#161518]' ><Link href='/terms&conditions' >Terms & Condition</Link></span>
                    </li>
                </ul>
            </nav>
                <div>{children}</div>
                <Footer />
            </main>
       </body> 
    </html>
  )
}

export default layout
