import React from 'react'
import { PryButton } from '@/components/shared/others/buttons'
import { AuthHeader } from '../layout'

const SignUp = () => {

  return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <AuthHeader title={'Register/Sign up to RentRite'} text={'We are excited to see you!'}/>

            <div className='w-full'>
                {/* <form action=""  className='flex flex-col space-y-6 w-full'> */}

                    <a href="/successVerification">
                        <div  className='w-full'>
                            <PryButton width={'100%'} name={'Register'}/>
                        </div>
                    </a>
                    
                {/* </form> */}
            </div>
        </div>
  )
}

export default SignUp