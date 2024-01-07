import React from 'react'
import { Link } from 'react-router-dom'
import { PryButton } from '../../shared/others/buttons'

const footerTitle = ({title})=>{
    <h2>{title}</h2>
}
const footerlinks = ({name, url})=>{
    <Link to={url}>{name}</Link>
}
const footerBox = ({children})=>{
    <div className='space-y-3'>
        {children}
    </div>
}

const Footer = () => {
  return (
    <div className='bg-[#161518]'>
        <div className='grid grid-cols-4'>
            <footerBox>
                <footerTitle title={'Who we are'}/>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim.</small>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut deserunt accusamus aliquid ea debitis incidunt quisquam! Recusandae nemo unde, dignissimos facilis a cupiditate.</small>

                <footerlinks url={''} name={'About Us'}/>
                <footerlinks url={''} name={'Blog'}/>

            </footerBox>
            <footerBox>
                <footerTitle title={'Services'}/>
                <footerlinks url={''} name={'Home rental services'}/>
                <footerlinks url={''} name={'Buy Land'}/>
                <footerlinks url={''} name={'Speak to consultant'}/>
                <footerlinks url={''} name={'Rent event centers'}/>
                <footerlinks url={''} name={'Long term home lease'}/>
            </footerBox>
            <footerBox>
                <footerTitle title={'Join Us'}/>
                <footerlinks url={''} name={'Become a verified Agent'}/>
                <footerlinks url={''} name={'Get referrals'}/>
                <footerlinks url={''} name={'Careers'}/>
            </footerBox>
            <footerBox>
                <footerTitle title={'Find Us'}/>
                <footerlinks url={''} name={'Help Centers'}/>
                <footerlinks url={''} name={'Call +234 9000999900'}/>
                <footerlinks url={''} name={'Email: mmmm@gmail.com'}/>
                <div>socials</div>
            </footerBox>
        </div>
        <div>
            <div>
                <input type="text" />
                <PryButton name={'Subscribe'}/>
            </div>
        </div>
        <div className='border-t py-3 flex justify-between items-center'>
            <small>2023.... All Rights Reserved</small>
            <small><Link>Privacy Policy</Link> | <Link>Terms & Conditions</Link></small>
        </div>
    </div>
  )
}

export default Footer