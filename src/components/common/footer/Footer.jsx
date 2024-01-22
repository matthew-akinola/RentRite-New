// import React from 'react'
// import { Link } from 'react-router-dom'
// import { PryButton } from '../../shared/others/buttons'

// const footerTitle = ({title})=>{
//     <h2>{title}</h2>
// }
// const footerlinks = ({name, url})=>{
//     <Link to={url}>{name}</Link>
// }
// const footerBox = ({children})=>{
//     <div className='space-y-3'>
//         {children}
//     </div>
// }

// const Footer = () => {
//   return (
//     <div className='bg-[#161518]'>
//         <div className='grid grid-cols-4'>
//             <footerBox>
//                 <footerTitle title={'Who we are'}/>
//                 <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim.</small>
//                 <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut deserunt accusamus aliquid ea debitis incidunt quisquam! Recusandae nemo unde, dignissimos facilis a cupiditate.</small>

//                 <footerlinks url={''} name={'About Us'}/>
//                 <footerlinks url={''} name={'Blog'}/>

//             </footerBox>
//             <footerBox>
//                 <footerTitle title={'Services'}/>
//                 <footerlinks url={''} name={'Home rental services'}/>
//                 <footerlinks url={''} name={'Buy Land'}/>
//                 <footerlinks url={''} name={'Speak to consultant'}/>
//                 <footerlinks url={''} name={'Rent event centers'}/>
//                 <footerlinks url={''} name={'Long term home lease'}/>
//             </footerBox>
//             <footerBox>
//                 <footerTitle title={'Join Us'}/>
//                 <footerlinks url={''} name={'Become a verified Agent'}/>
//                 <footerlinks url={''} name={'Get referrals'}/>
//                 <footerlinks url={''} name={'Careers'}/>
//             </footerBox>
//             <footerBox>
//                 <footerTitle title={'Find Us'}/>
//                 <footerlinks url={''} name={'Help Centers'}/>
//                 <footerlinks url={''} name={'Call +234 9000999900'}/>
//                 <footerlinks url={''} name={'Email: mmmm@gmail.com'}/>
//                 <div>socials</div>
//             </footerBox>
//         </div>
//         <div>
//             <div>
//                 <input type="text" />
//                 <PryButton name={'Subscribe'}/>
//             </div>
//         </div>
//         <div className='border-t py-3 flex justify-between items-center'>
//             <small>2023.... All Rights Reserved</small>
//             <small><Link>Privacy Policy</Link> | <Link>Terms & Conditions</Link></small>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// import Social1 from "../../../images/social1.jpg";
// import Social2 from "../../../images/social2.jpg";
// import Social3 from "../../../images/social3.jpg";
// import Social4 from "../../../images/social4.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 px-8 md:px-24 md:pt-16 shadow bg-black text-white">
        <div className="container grid lg:grid-cols-4 md:grid-cols-2 px-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-2xl pb-8">Who we are</h4>
            <p className="text-[#82808F] mb-6">
              Rentrite is bringing quality services to the real estate space.
            </p>
            <p className="text-[#82808F] mb-6">
              We provide the best service when it comes to renting, buying and
              leasing of properties. You get; assured quality, low fees and
              verified agents.
            </p>
            <ul className="text-white font-bold">
              <li>
                <Link to="/about-us" className="mb-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="mb-2">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-2xl pb-8">Services</h4>
            <ul className="text-white">
              <li className="mb-2">House rental services</li>
              <li className="mb-2">Buy Land</li>
              <li className="mb-2">Speak to Consultants</li>
              <li className="mb-2">Rent event centers</li>
              <li className="mb-2">Long term home lease</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-2xl pb-8">Join Us</h4>
            <ul className="text-white">
              <li className="mb-2">Become a verified agent</li>
              <li className="mb-2">Get referrals</li>
              <li className="mb-2">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-2xl pb-8">Find Us</h4>
            <ul className="text-white">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Call: +234 904370276</li>
              <li className="mb-2">Email: Contact@spokaneblinds.com</li>
            </ul>
            <div className="flex gap-3 text-white pb-6">
              <span className="social-icons">
                <FaFacebookF />
              </span>
              <span className="social-icons">
                <FaInstagram />
              </span>
              <span className="social-icons">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        <div className="py-10 items-center flex justify-center md:justify-end container px-10">
          <form className="flex">
            <input
              type="email"
              name="subscribe"
              id="subscribe"
              placeholder="Email"
              className="w-100 py-2 px-[2rem] outline-0 rounded-l-lg"
            />
            <button className="bg-pur md:px-10 h-btn text-white p-2 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col text-center border-t border-[#E4CCE5] md:text-right gap-2 md:flex-row justify-between pt-3 container px-5 text-white font-semibold">
          <span>©2021 houseFree. All Rights Reserved.</span>
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
