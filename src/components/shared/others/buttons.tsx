// import React from 'react'

interface iPryButton {
  name: string,
  width?: string
}
export const PryButton:React.FC<iPryButton> = ({name, width} ) => {
  return (
    <button className={`w-[${width}] bg-primary text-[#E8E7EA] px-[56px] py-[8px]`}>{name}</button>
  )
}

export const SecButton: React.FC<iPryButton> = ({name}) => {
  return (
    <button className='border border-primary text-[#2B2A30] px-[56px] py-[8px]'>{name}</button>
  )
}

