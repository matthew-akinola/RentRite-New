import Link from 'next/link';
import React from 'react'

interface selectUserProps{
  url:string;
  title:string;
  icon:string;
  desc:string;
}

const SelectUserType = ({url, title, icon, desc}:selectUserProps) => {
  return (
    <Link href={url} className='p-2 flex items-center'>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </Link>
  )
}

export default SelectUserType