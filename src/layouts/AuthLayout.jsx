import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <section className='flex w-full'>
        <div style={{backgroundImage: url('')}} className='hidden md:block w-[40%]'>
            
        </div>
        <div className='w-full md:w-[60%]'>
            {children}
        </div>
    </section>
  )
}

export default AuthLayout