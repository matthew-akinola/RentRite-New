// import React from 'react'

interface iPryButton {
  name: string,
  width?: string
  type?:"submit" | "reset" | "button" | undefined
}
export const PryButton:React.FC<iPryButton> = ({name, width, type} ) => {
  return (
    <button type={type} className={`w-[${width}] bg-primary text-[#E8E7EA] px-[56px] py-[14px] rounded-lg w-full`}>{name}</button>
  )
}

export const SecButton: React.FC<iPryButton> = ({name}) => {
  return (
    <button className='border border-primary text-[#2B2A30] px-[56px] py-[14px] rounded-lg'>{name}</button>
  )
}

