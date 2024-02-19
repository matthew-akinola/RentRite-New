import React from 'react'

const PlanCard = () => {
  return (
    <div className='h-[400] rounded-lg'>
        <div className='w-full h-[24px]'>
            {/* badge */}
        </div>
        <div className='flex justify-center items-center'>
            <p>Standard Price</p>
            <p className='text-[36px] font-400 '>₦ 12,000<span className='text-[24px]'>/month</span></p>

            <ul>
                <li>

                </li>
            </ul>
            
            <div>
                <button>Pay Online with Card</button>
            </div>
            <div>
                <button>Pay Now via bank transfer</button>
            </div>
        </div>
    </div>
  )
}

export default PlanCard