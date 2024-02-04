import React from 'react';
import Link from 'next/link';

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
        <div className='w-full py-3 px-8 '>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <img src={"/logo.svg"} alt="jkkk" />
                </Link>

                <ul className='flex space-x-6'>
                    {links?.map((item, index) => (
                        <Link key={index} href={item.url} className='active'>
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <div className='flex gap-2'>
                <div className="cursor-pointer flex items-center gap-4 text-gray-600 py-3 w-full ps-10">
                    <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
                    <p className='border-b-2 border-orange-300 text-orange-300'>
                        log out
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AuthenticatedNavBar;
