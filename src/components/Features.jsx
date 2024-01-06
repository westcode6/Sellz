import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { whyUs } from "../constants";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
export function FeatureCard({ img, title, desc, index }) {
  return (
    <section className="w-full sm:p-4 flex items-center justify-between gap-5">
      {/* Divider */}
      <div className="w-full  flex  items-center justify-between sm:flex-row">
        <motion.div
          className="w-full sm:max-w-lg "
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <div className="w-[95%]  px-6 py-4   bg-[#197771] shadow-2xl hover:shadow-inner rounded-tr-3xl rounded-bl-3xl">
            <div className="w-16 overflow-hidden p-1 shadow-xl">
              <img
                src={img}
                className="w-full object-contain object-center rounded-xl shadow-2xl"
                alt="stared"
              />
            </div>

            <div className="w-full mt-4">
              <h4 className="text-2xl font-bold">{title}</h4>
              <p className="text-lg py-4 text-green-100">{desc}</p>
            </div>

            <Link to="/">
              <h4 className="text-base font-bold my-6 text-green-200 flex items-center gap-4">
                Learn More
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </h4>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-[#197771] text-white rounded-2xl w-full flex py-20 ">
      <div className="w-full ">
        <div className="w-full sm:px-8 lg:px-12  flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="w-full"
            variants={textVariant()} 
            // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
           

            <div>
            <h2 className="w-full sm:max-w-2xl lg:leading-normal mx-auto text-5xl text-white text-center  font-bold">
              {" "}
              We provide best service for your business
            </h2>

            <div className="w-full md:max-w-xl mx-auto block lg:hidden">
            <img src="./assets/sellz-db.png" className="mt-10" alt="" />

            </div>

            </div>
            
        <div className="w-full pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {whyUs.map((service, index) => (
            <FeatureCard key={service.title} index={index} {...service} />
          ))}
        </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}

export default SectionWrapper(Features, "");
