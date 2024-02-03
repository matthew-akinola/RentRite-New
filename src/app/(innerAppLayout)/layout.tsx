import React, { ReactNode } from 'react';
import "@/app/globals.css";
import NavBar from '@/components/common/topnav/NavBar';
import SideNav from '@/components/common/dashboard/sideNav';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <header className='bg-white'>
        <NavBar/>
      </header>
      <main className='flex w-full' style={{height: `calc(100vh - 96px)`}}>
        <div className='className="w-[18%] absolute translate-x-[-300px] lg:translate-x-0 lg:fixed"'><SideNav/></div>
        <div className='w-full lg:w-[82%] lg:ml-[18%] overflow-x-hidden p-8'>{children}</div>
      </main>
      </body>
    </html>
  );
};

export default AuthLayout;
