import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout, { AuthHeader } from '../../layouts/AuthLayout'
import { PryButton } from '../../components/shared/others/buttons'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/welcome')
    }

  return (
    <AuthLayout>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <AuthHeader title={'Welcome Back!'} text={'We are excited to see you again!'}/>

            <div className='w-full'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-6 w-full'>


                    <div type='submit' className='w-full'>
                        <PryButton width={'100%'} name={'Login'}/>
                    </div>
                    
                </form>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Login