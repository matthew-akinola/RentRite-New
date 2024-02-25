"use client"

import React, { FormEvent, useContext, useState } from 'react';
// import { AuthHeader } from '../layout';
import { PryButton } from '@/components/shared/others/buttons';
import TextInput from '@/components/shared/inputs/TextInput';
import PasswordInput from '@/components/shared/inputs/PasswordInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {

  const BaseURL = process.env.BASE_URL;
  const endpoint = "/accounts/login/";
  const url = BaseURL + endpoint;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  // const auth = useContext(AuthContext)
  // const login = auth?.handleLogin
  // const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();
  const auth = useContext(AuthContext)
  const login = auth.handleLogin
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });




const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

  console.log('start')
  e.preventDefault();
  const validationErrors = validateFormData(formData);
  console.log(validationErrors)
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setLoading(true);
    const params = {
      "email": formData.email,
      "password": formData.password,
    }
    console.log(params);
    console.log(url);
    try {
      const response = await axios.post(
        url,
        JSON.stringify(params),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      let status = response.data.status;
      let access_token = response.data.tokens.access
      let refresh_token = response.data.tokens.refresh
      let userDetails = response.data.tokens.user
      if (status) {
        setLoading(false);
        toast.success("Login Successful");
        login(access_token, refresh_token, userDetails)
        router.push("/dashboard");
      } else {
        setLoading(false);
        toast.error("Login Unsuccessful");
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const validateFormData = (data: any) => {
  const errors: Record<string, string> = {};
  if (!data.email) {
    errors.email = "Please enter your first name";
  }
  if (!data.password) {
    errors.password = "Please enter your password";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } 
  return errors;
};




  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* <AuthHeader title={'Welcome Back!'} text={'We are excited to see you again!'} /> */}

        <div className='w-full flex justify-center items-center py-8'>
          <form action='' onSubmit={handleSubmit} className='flex flex-col space-y-6 w-full sm:w-[80%] '>

            <TextInput
              required
              id="email"
              name='email'
              type='email'
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              error={errors.username}
            />

            <PasswordInput
              id="password"
              name='password'
              type='password'
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              error={errors.password}
            />

                <div  className='w-full'>
                <PryButton type='submit' width={'100%'} name={'Login'} />
                </div>

          </form>
        </div>
      </div>
  );
};

export default Login;
