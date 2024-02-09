import React from 'react'

const BecomeASeller = () => {
  return (
    <div className='h-full flex'>
      <div className=' mt-auto h-fit w-fit '>
        <h2 className='font-bold text-[#161518] text-[34px]'>Get the Best Deal for Your Property</h2>
        <p className='mt-2 text-[22px] font-normal'>Maximize your profit with us, sell with confidence, grow your reputation</p>
        <div className='flex mt-2'>
          <div className='mt-3'><button className=' text-white bg-[#79007B] rounded-lg px-14 py-4'>Become a seller</button></div>
          <div className='-mb-[7px]'><span className="inline-flex w-[274px] h-[138px] bg-[url('/images/footerImg1.png')]"></span></div>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-end">
        <div className='-mb-9 ml-4 relative z-10'>
          <span className="inline-block  bg-[url('/images/footerframe2.png')] w-[138px] h-[136px]"></span>
        </div>
        <div className='-mt-10 -mb-[7px]'><span className="inline-flex bg-[url('/images/footerImg2.png')] w-[208.97px] h-[162px]">
          </span></div>
      </div>
    </div>
  )
}

export default BecomeASeller
