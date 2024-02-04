"use client"

import { AuthContext } from '@/context/AuthContext'
import useFetch from '@/hooks/useFetch'
import React, {useContext, useEffect, useState} from 'react'

const AgentSubscriptionPage = () => {

    const auth = useContext(AuthContext)
    const user = auth.userData
    const [status, setStatus] = useState('Free')

    const {myData} = useFetch('/payments/agent/subscription/')
    
    useEffect(()=>{
        console.log(myData)
    },[])


  return (
    <div>
        <div className='bg-[#F4F5F4] p-4 mb-4'>
            <h1 className='text-[#161518] font-[600] text-[24px] leading-[24px]'>Agent Subscription</h1>
        </div>

        <div className='bg-[#F4F5F4] shadow-lg'>
            <div className='flex gap-3 p-4'>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Email: <span className='text-[#2B2A30] font-normal'>mic@gmail.com</span></h1>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Account ID: <span className='text-[#2B2A30] font-normal'>1234</span></h1>
            </div>
            
            <div className={`${status === 'Free' &&  'bg-[#FAE0E0]'} p-4`}>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Current Subscription - <span style={{color: `${status === 'Free' && '#F76A6A'}`}} className='text-[#2B2A30] font-normal'>{status}</span></h1>
            </div>     

            <div className='p-4 space-y-2'>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Standard listings: <span className='text-[#2B2A30] font-normal'>5 out of 5 available</span></h1>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Premium listings: <span className='text-[#2B2A30] font-normal'>0 out of 0 available</span></h1>
                <h1 className='text-[#161518] font-[600] text-[16px] leading-[24px]'>Property post boost: <span className='text-[#2B2A30] font-normal'>0 out of 0 available</span></h1>

            </div>


            <div>
                <div className='bg-[#F4F5F4] p-4 mb-4'>
                    <h1 className='text-[#161518] font-[600] text-[24px] leading-[24px]'>Pricing Plan</h1>
                </div>

                <div>

                </div>
            </div>

        </div>



    </div>
  )
}

export default AgentSubscriptionPage