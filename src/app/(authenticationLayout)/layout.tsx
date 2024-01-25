import React, { ReactNode } from 'react';
import "@/app/globals.css";


interface AuthHeaderProps {
  title: string;
  text: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, text }) => {
  return (
    <div className='flex justify-center items-center text-center flex-col space-y-6 '>
      <h3 className='font-[500] text-[24px] leading-[32px] text-center text-[#161518]'>{title}</h3>
      <p className='text-[#565560] text-[18px] font-[500]'>{text}</p>
    </div>
  );
};

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className='flex w-full h-[100vh]'>
        <div style={{ backgroundImage: `url(${"/images/login-bg.jpeg"})` }} className='hidden md:block w-[40%] relative lg:flex justify-center items-end pb-[6rem] z-[-1]'>
            {/* Content for the left side */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
            <div>
            <h1 className='text-center font-[700] text-[56px] text-[#FBFBFC] leading-[72px]'>Rent or own <br /> the perfect home</h1>
            </div>
        </div>
        <div className='w-full md:w-[60%] p-[2rem]'>
            {children}
        </div>
        </main>
      </body>
    </html>
  );
};

export default AuthLayout;
