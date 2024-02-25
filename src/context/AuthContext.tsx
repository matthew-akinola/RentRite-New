"use client";
import { User } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect, ReactNode } from 'react';


// Define the shape of the AuthContext
interface AuthContextType {
  isLoggedIn: boolean;
  userData: User | null;
  handleLogin: (accessToken: string, refreshToken:string, userData: User) => void;
  // handleRegister: (token: string, userData: User) => void;
  handleLogout: () => void;

}

// Define the AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}
// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userData: null,
  handleLogin: () => {},
  handleLogout: () => {},
});



export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [lastActiveTimestamp, setLastActiveTimestamp] = useState<number>(
    Date.now()
  );
    
  const router = useRouter()

  const [userData, setUserData] = useState<User | null>(null);

  const MAX_INACTIVITY_DURATION = 50 * 60 * 10000;

  useEffect(() => {
    const handleActivity = () => {
      setLastActiveTimestamp(Date.now());
    };

    // Add event listeners to track user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    // Check if there is a token in the localStorage and set the login state
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const info = localStorage.getItem('details');
      if (info) {
        setUserData(JSON.parse(info));
      }
    }

    return () => {
      // Clean up event listeners
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);


  // useEffect(() =>{
  //   const access_token = localStorage.getItem('token');
  //   const user_details = localStorage.getItem('details');

  //   if (access_token && user_details){
  //     console.log('token and details found')
  //     setUserData(JSON.parse(user_details))
  //     setIsLoggedIn(true)
     
  //   }else{
  //     setIsLoggedIn(false)
  //   }
  // }, [])
    
  useEffect(() => {
    const logoutAfterInactivity = setInterval(() => {
      const currentTime = Date.now();
      if (
        isLoggedIn &&
        currentTime - lastActiveTimestamp > MAX_INACTIVITY_DURATION
      ) {
        handleLogout();
      }
    }, 1000);

    return () => {
      clearInterval(logoutAfterInactivity);
    };
  }, [isLoggedIn, lastActiveTimestamp]);

  const handleLogin = (accessToken: string, refreshToken:string, userData: User) => {
    localStorage.setItem('accesstoken', accessToken);
    localStorage.setItem('refreshtoken', refreshToken);
    localStorage.setItem('isAuth', 'True');
    localStorage.setItem('details', JSON.stringify(userData));
    setIsLoggedIn(true);
    setLastActiveTimestamp(Date.now());
    setUserData(userData);
    router.push('/dashboard')
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('details');
    localStorage.removeItem('isAuth');
    setIsLoggedIn(false);
  };


  const values = {
    isLoggedIn,
    userData,
    handleLogin,
    handleLogout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
