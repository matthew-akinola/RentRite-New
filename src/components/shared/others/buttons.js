// import React from 'react'

export const PryButton = ({name, width}) => {
  return (
    <button className={`w-[${width}] bg-primary text-[#E8E7EA] px-[56px] py-[8px]`}>{name}</button>
  )
}

export const SecButton = ({name}) => {
  return (
    <button className='border border-primary text-[#2B2A30] px-[56px] py-[8px]'>{name}</button>
  )
}

