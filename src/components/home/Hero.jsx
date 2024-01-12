import React from 'react';
import BG from '../../assets/images/about1.jpg'

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${BG})` }} className='bg-cover bg-no-repeat h-[100vh] w-full relative z-[-1]'>
      <div style={{backgroundColor:'rgba(0,0,0,0.7)'}} className='w-full h-full absolute top-0 left-0 z-[-1]'></div>
    </div>
  );
}

export default Hero;
