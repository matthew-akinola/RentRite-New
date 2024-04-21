"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Menu from '../menu';

interface NavLinkItem {
    name: string;
    url: string;
}

const links: NavLinkItem[] = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Buy',
        url: '/buy'
    },
    {
        name: 'Rent',
        url: '/rent'
    },
    {
        name: 'Consultant',
        url: ''
    },
    {
        name: 'Blog',
        url: ''
    },
    {
        name: 'About Us',
        url: '/about'
    },
    {
        name: 'Contact Us',
        url: '/contact'
    },
];

const AuthenticatedNavBar: React.FC = () => {
    return (
        <div className='w-full py-3'>
            <div className='flex justify-between'>
                <div className=" lg:w-[20%] md:flex  px-8 ">
                    <Link href='/'>
                        <Image src={"/logo.svg"} alt="rentrite" height={50} width={50}  />
                    </Link>
                </div>
                <div className='w-full hidden lg:flex lg:w-[80%] overflow-x-hidden px-8 items-center justify-between'>
                    <div className=''>
                        <p className='text-[1.2rem] font-[700]'>Dashboard</p>
                        <p className='text-[12px] font-[500] text-gray-400'>Dashboard</p>
                    </div>
                    <div className="flex items-center w-[70%]">
                        <form className="flex items-center gap-6 w-full">
                            <div className="w-full rounded-[10px] border bg-white px-[1rem] shadow-sm  ">
                            <div className="flex h-full  items-center">
                                <SearchIcon className="w-4  text-primary-9" />
                                <div className="flex-grow">
                                    <Input
                                        className="form-input  w-full border-0  focus:!ring-0"
                                        type="text"
                                        // onChange={(e) => setSearchInput(e.target.value)}
                                        // value={searchInput}
                                        placeholder={"Text"}
                                        name={"search"}
                                    />
                                </div>
                            </div>
                            </div>
                            <Button type="submit" className="bg-primary px-6  text-white md:py-2">
                                Go
                            </Button>
                        </form>
                        <div className="cursor-pointer flex items-center gap-4 text-gray-600 py-3 w-[10rem] ps-10">
                            <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
                            <p className='border-b-2 border-orange-300 text-orange-300'>
                                log out
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex md:hidden mx-8">
                  <Menu />
                </div>
            </div>
        </div>
    );
};

export default AuthenticatedNavBar;
