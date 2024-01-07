import React from 'react'
import { Link } from 'react-router-dom'

const SelectUserType = ({url, title, icon, desc}) => {
  return (
    <Link to={url} className='p-2 flex items-center'>
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