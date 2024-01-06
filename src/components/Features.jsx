import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { whyUs } from "../constants";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
export function FeatureCard({ img, title, desc, index }) {
  return (
    <section className="w-full">
      {/* Divider */}
      <div className="w-full  flex  items-center justify-between sm:flex-row">
        <motion.div
          className="w-full sm:max-w-lg "
          variants={fadeIn("down", "spring", 5 * index, 0.75)}
        >
          <div className="w-[85%]  px-6 py-4   bg-[#197771] shadow-2xl hover:shadow-inner rounded-tr-3xl rounded-bl-3xl">
            <div className="w-16 overflow-hidden p-1 shadow-xl">
              <img
                src={img}
                className="w-full object-contain object-center rounded-xl shadow-2xl"
                alt="stared"
              />
            </div>

            <div className="w-full mt-4">
              <h4 className="text-xl font-bold">{title}</h4>
              <p className="text-base py-4 text-white">{desc}</p>
            </div>

            <Link to="/">
              <h4 className="text-base font-bold my-6 text-white flex items-center gap-4">
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
    <section className="bg-[#197771] text-white w-full flex">
      <div className="w-full ">
        <div className="w-full sm:px-8 lg:px-12  flex flex-col  items-center justify-between">
          <motion.div
            className="w-full"
            variants={textVariant()}
            // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
            <div className="pt-20">
              <h2 className="w-full sm:max-w-2xl leading-normal mx-auto text-3xl sm:text-4xl lg:text-5xl text-neutral-50 text-center  font-bold">
                {" "}
                We provide best service for your business
              </h2>

              <div className="w-full  block lg:hidden">
                <img src="./assets/good.jpeg" className="w-full mt-8" alt="" />
              </div>
            </div>
          </motion.div>


            <div className="w-full px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
              {whyUs.map((service, index) => (
                <FeatureCard key={service.title} index={index} {...service} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default Features
