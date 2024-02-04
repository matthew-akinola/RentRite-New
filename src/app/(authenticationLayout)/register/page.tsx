"use client"

import React, { FormEvent, useState } from 'react'
import { PryButton } from '@/components/shared/others/buttons'
import { AuthHeader } from '../layout'
import TextInput from '@/components/shared/inputs/TextInput'
import PasswordInput from '@/components/shared/inputs/PasswordInput'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const SignUp = () => {

    const BaseURL = process.env.BASE_URL ?? "https://rentrite-homes.up.railway.app";
    const endpoint = "/accounts/register/";
    const url = BaseURL + endpoint;
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);
    // const auth = useContext(AuthContext)
    // const login = auth?.handleLogin
    // const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      c_password: '',
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
        "first_name": formData.firstname,
        "last_name": formData.lastname,
        "email": formData.email,
        "password": formData.password,
        "is_agent": false
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
				if (status) {
					setLoading(false);
					toast.success("Registration Successful");
					router.push("/almostThere");
				} else {
					setLoading(false);
					toast.error("Registration Unsuccessful");
				}
			} catch (error) {
				console.error( error);
			}
		}
	};

	const validateFormData = (data: any) => {
		const errors: Record<string, string> = {};
		if (!data.firstname) {
			errors.firstname = "Please enter your first name";
		}
		if (!data.lastname) {
			errors.lastname = "Please enter your last name";
		}

		if (!data.email) {
			errors.email = "Please enter your email address";
		} else if (!/\S+@\S+\.\S+/.test(data.email)) {
			errors.email = "Please enter a valid email address";
		}
		if (!data.password) {
			errors.password = "Please enter your password";
		} else if (data.password.length < 8) {
			errors.password = "Password must be at least 8 characters long";
		} else if (!/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(data.password)) {
			errors.password =
				"Password must contain at least a number, capital letter, and a special character";
		}
		if (!data.c_password) {
			errors.c_password = "Please confirm your password";
		} else if (data.password !== data.c_password) {
			errors.c_password = "Passwords do not match";
		}
		return errors;
	};

  

  
    const handleInputChange = (name: string, value: string) => {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

  return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <AuthHeader title={'Register/Sign up to RentRite'} text={'We are excited to see you!'}/>

            <div className='w-full flex justify-center items-center py-8'>
            <form onSubmit={handleSubmit} action='' className='flex flex-col space-y-6 w-full sm:w-[80%]'>

                <div className='flex flex-col md:flex-row gap-10'>
                    <TextInput
                    required
                    id="firstname"
                    name='firstname'
                    type='text'
                    label="First Name"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    error={errors.firstname}
                    />     
                                   
                    <TextInput
                    required
                    id="lastname"
                    name='lastname'
                    type='text'
                    label="Last Name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    error={errors.lastname}
                    />                    
                </div>
                
                <div>
                    <TextInput
                    required
                    id="email"
                    name='email'
                    type='email'
                    label="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    error={errors.email}
                    />    
                </div>

                <div className='flex flex-col md:flex-row gap-10'>
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
                    <PasswordInput
                    id="c_password"
                    name='c_password'
                    type='c_password'
                    label="Confirm Password"
                    value={formData.c_password}
                    onChange={handleInputChange}
                    placeholder="Confirm Your password"
                    error={errors.c_password}
                    />                    
                </div>


                {/* <a href="/welcomeBack"> */}
                    <div  className='w-full'>
                    <PryButton type='submit' width={'100%'} name={'Register'} />
                    </div>
                {/* </a> */}
            </form>
            </div>
        </div>
  )
}

export default SignUp