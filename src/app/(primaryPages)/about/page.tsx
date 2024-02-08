import React from "react";
import { BsArrowRight } from "react-icons/bs";

// import "./About.css";
import Link from "next/link";

const About = () => {

  return (
    <div>
        <section className="p-10 md:pt-20 md:py-[7.5rem] px-5 sm:px-10 md:px-20">
            <div className="lg:grid lg:grid-cols-2 gap-16">
            <div className="items-center text-black">
                <div className="">
                <h2 className="text-3xl md:text-[72px] md:leading-[4.5rem] items-center self-center pt-[2rem] md:pt-[5rem] font-bold">
                    All you need to know about our website
                </h2>
                </div>
                <p className="py-7 font-400 text-lg text-justify md:text-left">
                We are a House sourcing company focused on easing the people’s
                experience with finding and renting new housing spaces We
                specialize in multifacerous housing standards and are dedicated to
                providing the best possible experience for our customers.
                </p>
                <div className="flex md:flex-wrap gap-2 md:mt-7">
                <button className="bg-[#79007B] text-white px-5 py-4 rounded-lg w-full max-w-[10rem] h-14 flex justify-center items-center" >
                    Get Started
                </button>
                    <button className="px-5 py-4 bg-white shadow text-black rounded-lg w-full max-w-[10rem] h-14 flex justify-center items-center" >
                    Be an Agent
                    </button>
                </div>
            </div>
            <div className="static hidden lg:block pl-3">
                <img
                className="relative top-[1rem] right-0 2xl:left-[6.5rem] rounded-bl-3xl w-full max-w-[580px] filte h-485 bg-cover bg-center z-[2]"
                src={"/images/about1.jpg"}
                alt=""
                />
                <img className="image2 pt-4" src={"/images/aboutbg.png"} alt="" />
            </div>
            </div>
        </section>

        <section className="py-10 md:mb-[4.5rem] px-5 sm:px-10 md:px-20">
            <div className="lg:grid grid-cols-2 items-center">
            <div className="z-20 mb-5 lg:mb-0">
                <img
                src={"/images/about1.jpg"}
                alt="apartment"
                className="w-[580px] lg:h-485 object-cover filte rounded-t-4xl"
                />
            </div>
            <div className="md:pl-3 lg:pl-14">
                <h4 className="text-3xl pt-2 lg:text-4xl text-pur font-bold">
                Apartment Renting
                </h4>
                <p className="py-7 text-justify lg:text-left">
                Our extensive database of apartment listings includes detailed
                descriptions, photos, and amenities, so you can easily compare and
                contrast properties. Plus, with our real-time availability and
                pricing information, you'll never miss out on your dream home
                </p>
                <div className="flex flex-wrap gap-2 md:mt-4 lg:mt-7">
                <button className="bg-[#79007B] text-white px-5 py-4 rounded-lg w-full max-w-[10rem] h-14 flex justify-center items-center" >
                    Rent Now
                </button>
                </div>
            </div>
            </div>
        </section>

        <section className="mt-[3rem] lg:mt-0 px-5 sm:px-10 md:px-20 adjust-bg relative lg:bottom-14">
            <div className="absolute left-0 z-0 bg-pinkg rounded-bl-[4rem] w-full max-w-[1040px] h-full"></div>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 z-10 py-10 md:py-[9rem]">
            <div className="md:pr-8 xl:pr-14 lg:ml-[6.5rem] z-10">
                <h4 className="pt-2 text-3xl lg:text-4xl text-pur font-bold">
                Consult with experts
                </h4>
                <p className="py-7 text-justify lg:text-left">
                "Are you facing a complex problem or decision and need expert
                guidance? Our team of highly qualified professionals is here to
                help. With years of experience and specialized knowledge in their
                respective fields, our experts can provide valuable insights and
                recommendations. Whether you need advice on a business strategy,
                legal issue, or technical challenge, we have the expertise to
                support you. Contact us today to schedule a consultation and see
                how we can assist you in finding the best solution."
                </p>
                <div className="flex flex-wrap gap-2 md:4 lg:mt-7 mb-10 lg:mb-0">
                <button className="px-5 py-4 rounded-lg w-full max-w-[10rem] h-14 flex justify-center items-center bg-[#79007B] text-white z-10">
                    Consult Now
                </button>
                </div>
            </div>
            <div className="order-first lg:order-last mb-[2rem]">
                <img
                src={"/images/kitchen.jpeg"}
                alt="apartment"
                className="w-full max-w-[36rem] md:h-80 lg:h-[29rem] object-cover filte rounded-t-4xl"
                />
            </div>
            </div>
        </section>
        <section className="pt-10 lg:pt-5 pb-14 container">
            <div className="grid lg:grid-cols-2 ">
            <div className="z-20">
                <img
                src={"/images/about4.png"}
                alt="apartment"
                className="w-[580px] md:h-80 lg:h-485 object-cover filte rounded-t-4xl"
                />
            </div>
            <div className="lg:pl-14 pt-8 px-5">
                <h4 className="text-3xl lg:text-4xl text-pur font-bold">
                Being an Agent
                </h4>
                <p className="py-7 text-justify lg:text-left">
                Maximize your commissions and streamline your rental business with
                RentRite's professional apartment listing and management services.
                RentRite is the perfect partner for real estate agents looking to
                grow their rental business. Sign up now and start achieving your
                goals.
                </p>
                <div className="flex flex-wrap gap-2 md:4 lg:mt-7">
                <Link href="/agent-signup">
                    <button className="px-5 py-4 rounded-lg w-full max-w-[10rem] h-14 flex justify-center items-center bg-[#79007B] text-white">
                    Be an Agent
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </section>
    </div>
  );
};

export default About;
