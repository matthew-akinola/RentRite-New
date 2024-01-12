import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PryButton, SecButton } from '../../shared/others/buttons'

const links = [
    {
        name: 'Home',
        url: ''
    },
    {
        name: 'Buy',
        url: ''
    },
    {
        name: 'Rent',
        url: ''
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
        url: ''
    },
    {
        name: 'Contact Us',
        url: ''
    },
]

const NavBar = () => {
  return (
    <div className='w-full py-3 px-8 '>
        <div className='flex justify-between items-center'>
            <Link to='/'><img src="" alt="jkkk" /></Link>

            <ul className='flex space-x-6'>
                {
                    links?.map((item, index)=>
                        <NavLink key={index} to={item.url}>{item.name}</NavLink>
                    )
                }

            </ul>

            <div className='flex gap-2'>
                <Link to={'/login'}><SecButton name='Log In'/></Link>
                <Link to={'/register'}><PryButton name='Register'/></Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar

