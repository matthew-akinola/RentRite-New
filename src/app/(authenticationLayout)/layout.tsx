import React, { ReactNode } from 'react';
import "@/app/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <ToastContainer/>
          <main className='flex w-full h-[100vh]'>
            <div style={{ backgroundImage: `url(${"/images/login-bg.jpeg"})` }} className='hidden w-[40%] relative lg:flex justify-center items-end pb-[6rem] z-[-1]'>
                {/* Content for the left side */}
                <div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
                <div>
                <h1 className='text-center font-[700] text-[56px] text-[#FBFBFC] leading-[72px]'>Rent or own <br /> the perfect home</h1>
                </div>
            </div>
            <div className='w-full lg:w-[60%] p-[2rem] '>
                {children}
            </div>
          </main>


      </body>
    </html>
  );
};

export default AuthLayout;
