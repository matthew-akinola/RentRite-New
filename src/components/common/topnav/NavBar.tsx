import React from 'react';
import { PryButton, SecButton } from '../../shared/others/buttons';
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

const NavBar: React.FC = () => {
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
                    <Link href='/login'>
                        <SecButton name='Log In' />
                    </Link>
                    <Link href='/register'>
                        <PryButton name='Register' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
