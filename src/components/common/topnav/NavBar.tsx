"use client"

import React, { useEffect, useState } from 'react';
import { PryButton, SecButton } from '../../shared/others/buttons';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from '@/components/shared/containers/container';

interface NavLinkItem {
    name: string;
    url: string;
}

const links: NavLinkItem[] = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Buy',
        url: '/buy'
    },
    {
        name: 'Rent',
        url: '/rent'
    },
    {
        name: 'Consultant',
        url: ''
    },
    {
        name: 'Blog',
        url: '/blog/spotlight'
    },
    {
        name: 'About Us',
        url: '/about'
    },
    {
        name: 'Contact Us',
        url: '/contact'
    },
];

// const NavBar: React.FC = () => {
//     return (
//         <div className='w-full py-3 px-8 '>
//             <div className='flex justify-between items-center'>
//                 <Link href='/'>
//                     <img src={"/logo.svg"} alt="jkkk" />
//                 </Link>

//                 <ul className='flex space-x-6'>
//                     {links?.map((item, index) => (
//                         <Link key={index} href={item.url} className='active'>
//                             {item.name}
//                         </Link>
//                     ))}
//                 </ul>

//                 <div className='flex gap-2'>
//                     <Link href='/login'>
//                         <SecButton name='Log In' />
//                     </Link>
//                     <Link href='/register'>
//                         <PryButton name='Register' />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

  return (
    <div>
        <div className={`${isScrolled ? ' w-full shadow-lg transition-all ease-in-out duration-500 z-[9999999999999]' : ''} !bg-white fixed  z-[9999999999999] w-full bg-transparent`}>
        
                <div data-aos="flip-up" className={` py-6 relative z-[9999999999999] w-full`}>
                    <Container>
                        <div className=' flex w-full justify-between items-center'>
                        <div>
                        <Link href='/'>
                            <img src={"/logo.svg"} className='h-[50px] w-[50px]' alt="jkkk" />
                        </Link>
                            </div>
                        <ul className='lg:flex gap-8 hidden'>
                                {
                                    links?.map((item, id)=>{
                                        return(
                                            <li key={id} className={`text-[#2B2A30] font-[600] font-Raleway text-[16px] leading-9`}><Link className={"text-[#2B2A30] font-bold transition-all ease-out duration-300"} href={item.url}>{item.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                            {/* desktop */}
                            <div className='block lg:hidden'><button onClick={()=>setOpen(!open)} className='lg:hidden block  top-0 right-0 text-3xl cursor-pointer'>{open? <FaTimes color='#79007b' /> : <FaBars color={'#79007b'}/>}</button></div>
                            <div className='hidden lg:flex gap-4'>
                                <Link href='/login'>
                                    <SecButton name='Log In' />
                                </Link>
                                <Link href='/register'>
                                    <PryButton name='Register' />
                                </Link>
                            </div>
                        </div>
                    </Container>
                    {/* mobile */}
                        <ul className={` bg-white lg:hidden w-full h-[93vh] lg:h-full top-[100px] lg:top-0 left-0 flex items-center gap-10 lg:space-y-0 lg:space-x-3 absolute lg:relative flex-col lg:flex-row transition-all duration-500 ease-in-out ${open? 'translate-x-[0]' : 'translate-x-[-800px]'} py-10`}>
                            {
                                links?.map((item, id)=>{
                                    return(
                                        <li onClick={()=>setOpen(false)} key={id} className={`text-[#252641] font-[600] font-Raleway text-[16px] leading-9 w-full flex justify-center items-center`}><Link href={item.url} className="text-[#79007b] font-bold  w-full flex justify-center items-center transition-all ease-out duration-300" >{item.name}</Link></li>
                                    )
                                })
                            }
        
        {/* <li>
                                    <Link href={'/'}>
                                    <PryButton
                                        type={'button'}
                                        text={'Login'}
                                        textSize={12}
                                        isItalic={false}
                                        isWhite={true}
                                        className={'px-[60px] py-[8px]'}
                                        />
                                    </Link>
        
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <PryButton
                                        type={'button'}
                                        text={'Sign Up'}
                                        textSize={12}
                                        isItalic={false}
                                        isWhite={false}
                                        className={'px-[60px] py-[8px]'}
                                        />
                                    </Link>
                                </li> */}
                        </ul>
        
                </div>
        
        </div>
    </div>


  )
}


export default NavBar;
