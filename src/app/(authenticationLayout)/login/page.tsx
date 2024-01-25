import React from 'react';
import { AuthHeader } from '../layout';
import { PryButton } from '@/components/shared/others/buttons';

const Login: React.FC = () => {

  return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <AuthHeader title={'Welcome Back!'} text={'We are excited to see you again!'} />

        <div className='w-full'>
          {/* <form action='' className='flex flex-col space-y-6 w-full'> */}
            <a href="/welcomeBack">
                <div  className='w-full'>
                <PryButton width={'100%'} name={'Login'} />
                </div>
            </a>
          {/* </form> */}
        </div>
      </div>
  );
};

export default Login;
