import React from 'react'
import Check from '../../assets/icons/tick-circle.svg'

const SuccessVerifcation = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col space-y-6 w-full h-[100vh]'>
            <img className='w-[226px] h-[226px]' src={Check} alt="check mark" />
            <h2 className='font-[700] text-[28px] leading-[36px]  text-[#79007B]'>Email verification successful</h2>
            <p className='text-[#2B2A30] font-[400] text-[16px] leading-[24px] w-[30%] text-center'>Welcome to rentrite</p>
            <div className='w-[315px] h-[8px] bg-[#E4CCE5]'></div>
        </div>
    </div>
  )
}

export default SuccessVerifcation