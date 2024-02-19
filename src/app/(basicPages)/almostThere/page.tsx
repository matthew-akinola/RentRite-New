"use client"

import React, {useEffect} from 'react';
// import Check from '/icons/tick-circle.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AlmostThere: React.FC = () => {
  const router = useRouter()
  // useEffect(() => {

  //   setTimeout(()=>{
  //     router.push('/login')
  //   },3000)
  // }, [])
  
  return (
    <div>
      <div className='flex justify-center items-center flex-col space-y-6 w-full h-[100vh]'>
        <img className='w-[226px] h-[226px]' src='/icons/tick-circle.svg' alt="check mark" />
        <h2 className='font-[700] text-[28px] leading-[36px]  text-[#79007B]'>Almost Here</h2>
        <p className='text-[#2B2A30] font-[400] text-[16px] leading-[24px] w-[40%] text-center'>We’re excited to see you! We sent you an email, please check your mailbox and complete your registration.</p>
        <Link className='text-[#79007B] text-[16px] font-[400]' href={'mailto:'}>Open Mail App</Link>
      </div>
    </div>
  );
}

export default AlmostThere;
