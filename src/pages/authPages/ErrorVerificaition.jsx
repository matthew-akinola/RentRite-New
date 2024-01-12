import React from 'react'
import { Link } from 'react-router-dom'
import Error from '../../assets/icons/failed.svg'

const ErrorVerificaition = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col space-y-6 w-full h-[100vh]'>
            <img className='w-[226px] h-[226px]' src={Check} alt="check mark" />
            <h2 className='font-[700] text-[28px] leading-[36px]  text-[#79007B]'>Email verification failed</h2>
            <p className='text-[#2B2A30] font-[400] text-[16px] leading-[24px] w-[30%] text-center'>An error occured, please try again or <Link to={'/'} className='text-decoration-underline font-[400] text-[#79007B]'>contact us</Link></p>
            <div className='w-[315px] h-[8px] bg-[#E4CCE5]'></div>
            <Link className='text-[#79007B] text-[16px] font-[400]' to={'mailto:'}>Open Mail App</Link>
        </div>
    </div>
  )
}

export default ErrorVerificaition