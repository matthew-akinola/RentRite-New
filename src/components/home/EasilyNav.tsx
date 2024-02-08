import React from 'react'
import { HeaderTextMD } from '../shared/typographs/Typo'
import { PryButton } from '../shared/others/buttons'
import Link from 'next/link'

interface iNavCard {
    title: string,
    img: string,
    wide: string | number,
}
const NavCard: React.FC<iNavCard> = ({title, img, wide})=>{
    return(
        <div style={{backgroundImage:`url(${img})`}} className={`h-[320px] w-full lg:w-[${wide}] p-6 rounded-[20px] relative object-contain`}>
            <div style={{backgroundColor:'rgba(0,0,0,0.7)'}} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
            <p className='font-[500] text-[24px]'>{title}</p>

        </div>
    )
}

const EasilyNav = () => {
  return (
    <div className='w-[95%] bg-[#FBFBFC] flex flex-col justify-center items-center space-y-8 rounded-2xl'>
        <HeaderTextMD text={'Easily Navigate Your Housing Search'} align={'center'}/>

        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:flex justify-center items-center gap-4'>
            <NavCard title={'Search Apartment'} img={"/images/about4.png"} wide={'320px'}/>
            <NavCard title={'Search Apartment'} img={"/images/about3.png"} wide={'434px'}/>
            <NavCard title={'Search Apartment'} img={"/images/about3.png"} wide={'320px'}/>
        </div>

        <Link href=''><PryButton name={'Start Now'}/></Link>
    </div>
  )
}

export default EasilyNav