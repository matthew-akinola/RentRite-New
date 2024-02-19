import React from 'react'
import Link from 'next/link'

interface CardInterface {
  thumbnail: string,
  tittle : string,
  text: string,
  url : string
}

interface CardItem {
  card : CardInterface
}

const Card = ({card}:CardItem ) => {
  return (
    <div className='max-w-[649px] '>
    <img src={card.thumbnail} alt="featured blogposts" />
    <div className='mt-5'>
        <h3 className='font-semibold text-2xl text-[#161518]'>{card.tittle}</h3>
        <p className='text-[#82808F] mt-2'>{card.text}</p>
        <p className='text-[#2B2A30] font-bold text-xs mt-2 hover:cursor-pointer'><Link href={card.url}>Read Post</Link></p>
    </div>
</div>
  )
}

export default Card;
