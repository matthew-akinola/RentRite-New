import React from 'react'
import AuthLayout, { AuthHeader } from '../../layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import { PryButton } from '../../components/shared/others/buttons'

const SignUp = () => {
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/progress')
    }

  return (
    <AuthLayout>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <AuthHeader title={'Register/Sign up to RentRite'} text={'We are excited to see you!'}/>

            <div className='w-full'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-6 w-full'>


                    <div type='submit' className='w-full'>
                        <PryButton width={'100%'} name={'Register'}/>
                    </div>
                    
                </form>
            </div>
        </div>
    </AuthLayout>
  )
}

export default SignUp