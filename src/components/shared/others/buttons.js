// import React from 'react'

export const PryButton = ({name, width}) => {
  return (
    <button className={`w-[${width}] py-4 px-14 bg-[#79007B] items-center shadow text-white rounded-lg z-10`}>{name}</button>
  )
}

export const SecButton = ({name}) => {
  return (
    <button className='border border-primary text-[#2B2A30] px-[56px] py-[8px]'>{name}</button>
  )
}

