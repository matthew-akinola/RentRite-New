import React, { ReactNode } from 'react';
import "@/app/globals.css";
import NavBar from '@/components/common/topnav/NavBar';
import SideNav from '@/components/common/dashboard/sideNav';
import AuthenticatedNavBar from '@/components/common/topnav/authenticatedNavBar';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <header className='bg-white'>
        <AuthenticatedNavBar/>
      </header>
      <main className='flex w-full' style={{height: `calc(100vh - 96px)`}}>
        <div className='lg:w-[20%] hidden md:flex'><SideNav/></div>
        <div className='w-full lg:w-[80%] overflow-x-hidden p-8'>{children}</div>
      </main>
      </body>
    </html>
  );
};

export default AuthLayout;
