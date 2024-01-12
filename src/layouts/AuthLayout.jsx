import React from 'react';
import Logo from '../assets/images/login-bg.jpeg'

export const AuthHeader = ({title, text}) =>{
  return(
    <div className='flex justify-center items-center text-center flex-col space-y-6 '>
        <h3 className='font-[500] text-[24px] leading-[32px] text-center text-[#161518]'>{title}</h3>
        <p className='text-[#565560] text-[18px] font-[500]'>{text}</p>
    </div>
  )
}

const AuthLayout = ({ children }) => {
  return (
    <section className='flex w-full h-[100vh]'>
      <div style={{ backgroundImage: `url(${Logo})` }} className='hidden md:block w-[40%] relative lg:flex justify-center items-end pb-[6rem] z-[-1]'>
        {/* Content for the left side */}
        <div style={{backgroundColor:'rgba(0,0,0,0.7)'}} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
        <div>
          <h1 className='text-center font-[700] text-[56px] text-[#FBFBFC] leading-[72px]'>Rent or own <br /> the perfect home</h1>          
        </div>

      </div>
      <div className='w-full md:w-[60%] p-[2rem]'>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
