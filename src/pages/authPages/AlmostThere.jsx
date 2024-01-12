import React from 'react'
import { Link } from 'react-router-dom'
import Check from '../../assets/icons/tick-circle.svg'

const AlmostThere = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col space-y-6 w-full h-[100vh]'>
            <img className='w-[226px] h-[226px]' src={Check} alt="check mark" />
            <h2 className='font-[700] text-[28px] leading-[36px]  text-[#79007B]'>Almost Here</h2>
            <p className='text-[#2B2A30] font-[400] text-[16px] leading-[24px] w-[30%] text-center'>We’re excited to see you! We sent you an email, please check your mailbox and complete your registration.</p>
            <Link className='text-[#79007B] text-[16px] font-[400]' to={'mailto:'}>Open Mail App</Link>
        </div>
    </div>
  )
}

export default AlmostThere