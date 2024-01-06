import React from "react";
// import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
// Create The Service Card Component to render our services
export const ServiceCard = ({ index, title, content, icon }) => {
  return (
    // <Tilt className="xs:w-[210px] bg-dark glass-effect w-full  rounded-xl">

   
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}//
      // animation pattern
      className="w-full"
    >
      {/* The Tilt options are coming into this div */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full border bg-white shadow-inner hover:shadow-sm transform transition  duration-300  rounded-2xl flex flex-col  items-center text-center justify-evenly gap-2"
      >
        <div className="w-28 py-4">
          <img src={icon} className="w-full object-contain obeject-center" alt="" />
        </div>
        <h4 className="text-neutral-700 text-xl text-center font-semibold">{title}</h4>
        <p className="text-lg tracking-wide text-neutral-500 py-4 px-8">{content}</p>
        <Link to="/learn">
          <h4 className="text-base font-bold py-8 text-green-900 flex items-center gap-4">
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

        <span />
      </div>
    </motion.div>

    // </Tilt>
  );
};

const About = ({index}) => {
  return (
    <>
      <div className={`bg-white flex-col  `}>
        {/* NOTE: that every motion effects must be passed as props in the motion tag */}
        <div>
        <motion.div
            className="pt-16"
            variants={textVariant()} // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
            <h2 className="w-full sm:max-w-2xl leading-normal mx-auto text-3xl sm:text-4xl lg:text-5xl text-neutral-700 text-center  font-bold">All Solution In One Platform</h2>
          </motion.div>
        </div>

        <div className="w-full  py-12 sm:py-20">
               
          <div className="w-full flex flex-col lg:flex-row  items-center justify-center px-5 gap-10 pb-20">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
         

        </div>
      </div>
    </>
  );
};

export default  SectionWrapper(About, "")