import React from 'react'
import { HeaderTextMD } from '../shared/typographs/Typo'
import { Link } from 'react-router-dom'
import { PryButton } from '../shared/others/buttons'


const NavCard = ({title, img, wide})=>{
    return(
        <div style={{backgroundImage:'url()'}} className={`h-[320px] w-full lg:w-[${wide}] rounded-[20px]`}>
            <p className='bg-white font-[500] text-[24px]'>{title}</p>
        </div>
    )
}

const EasilyNav = () => {
  return (
    <div className='w-[95%] bg-[#FBFBFC] flex flex-col justify-center items-center space-y-8 rounded-2xl'>
        <HeaderTextMD text={'Easily Navigate Your Housing Search'} align={'center'}/>

        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:flex justify-center items-center gap-4'>
            <NavCard title={'Search Apartment'} img={''} wide={'320px'}/>
            <NavCard title={'Search Apartment'} img={''} wide={'434px'}/>
            <NavCard title={'Search Apartment'} img={''} wide={'320px'}/>
        </div>

        <Link to=''><PryButton name={'Start Now'}/></Link>
    </div>
  )
}

export default EasilyNav