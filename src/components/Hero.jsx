import React from "react";
import { SectionWrapper } from "../hoc";

function Hero() {
  return (
    <header className="w-full  flex flex-col lg:flex-row  items-start justify-between gap-10 lg:gap-0">
      <div className=" w-full sm:max-w-2xl text-center lg:text-left px-2 pt-6">
        <div className="w-60 h-20 sm:h-40  absolute top-0 sm:top-2 overflow-hidden">
          <img
            src="./assets/see4i.png"
            className="w-full object-cover object-center"
            alt="design move"
          />
        </div>
        <h1 className="text-neutral-800 text-4xl sm:text-7xl font-bold mb-6">
          Best Solution And Grow Your Business Easier Than Ever
        </h1>

        <p className="text-neutral-500 font-medium text-lg sm:text-2xl">
          With Sellz, you can sell any kind of digital product to anyone,
          anywhere in the world and accept payments in any currency
        </p>

        <div className="my-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-4 text-xl font-semibold bg-[#ffc83e]  text-neutral-600 capitalize tracking-wide rounded-full">
            <a href="https://sellz.co/signup">Start Selling</a>
          </button>

          <button className="px-6 py-4 text-lg font-semibold bg-neutral-200 text-neutral-700 tracking-wide rounded-full">
          <a href="https://sellz.co/login">Login</a>
          </button>
        </div>

        <div className="w-60 h-40 hidden lg:block mt-20 ml-28 ">
          <img
            src="./assets/see3.png"
            className="w-full object-cover object-center"
            alt="design move"
          />
        </div>
      </div>

      <div className="w-full -mt-14 md:-mt-2 sm:max-w-xl flex items-start justify-start">
        <div className="w-full">
          <img
            src="./assets/inspo1.jpg"
            className="w-full object-cover scale-110 object-center"
            alt="sellz banner"
          />
        </div>
      </div>
    </header>
  );
}

export default SectionWrapper(Hero, "");
