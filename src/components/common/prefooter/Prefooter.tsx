import React from "react";
import "./prefooter.css";
import Link from "next/link";

const Prefooter = () => {
  return (
    <section className="bg-[#F7F7F7] p-8 md:p-20 relative">
      <img
        src={"/images/footerImg1.png"}
        alt="house illustration absolute bottom-0"
        className="hidden md:inline absolute bottom-0 left-[16.5rem] z-0"
      />
      <img className="absolute bottom-0 md:bottom-14 lg:bottom-28 right-0 lg:right-20 z-10 w-[5.5rem]" src={'/images/footerframe2.png"'} alt="" />{" "}
      <img
        className="hidden md:inline absolute bottom-0 right-0 w-[13rem] h-[13rem] z-0"
        src={"/images/footerImg2.png"}
        alt=""
      />
      <div className="flex flex-col gap-8">
        <header className="">
          <h1 className="text-4xl font-bold text-[#161518] mb-[0.65rem]  z-20">
            Get the Best Deal for Your Property
          </h1>
          <p className="text-[#2b2a30] text-xl  z-20">
            Maximize your profit with us, sell with confidence, grow your
            reputation
          </p>
        </header>
        <Link href="/agent-signup">
          <button className="py-4 px-14 bg-[#79007B] items-center shadow text-white rounded-lg z-10">
            Be a seller
          </button>
        </Link>
      </div>
      <div></div>

    </section>
  );
};

export default Prefooter;
