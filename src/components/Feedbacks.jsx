import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className=" shadow-2xl bg-[#F5F7F2]  border-4 border-[#176C66] rounded-tl-3xl rounded-br-3xl px-10 py-4 md:p-10 w-full sm:w-[360px] h-fit"
      >
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt="client photo"
            className="w-16 h-16 rounded-full shadow-xl"
          />

          <div className="w-full px-4 space-2">
            <h3 className="text-xl font-bold tracking-wide">{name}</h3>
            <h5 className="text-neutral-600 font-semibold">{company}</h5>
          </div>
        </div>
        <span />
        <div className="flex flex-col items-start justify-start py-4">
          <p className="text-base font-medium text-neutral-600">
            {testimonial}
          </p>
          <div className="w-full flex items-center mt-4 gap-2">
            <h5 className="text-xl text-green-700 font-bold">{company}</h5>

            <h6 className="text-sm text-neutral-600 font-semibold">
              {designation}
            </h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  return (
    <div className={`rounded-2xl  relative`}>
      <div className={`w-full`}>
        <motion.div variants={textVariant()} className="w-full">
          <h2 className="w-full sm:max-w-2xl leading-normal mx-auto text-5xl text-neutral-700 text-center  font-bold">
            {" "}
            Lets Hear What Are The Customer Saying.
          </h2>
        </motion.div>

        <img
          src="./assets/see5.jpeg"
          className="w-60 h-20 ml-10 lg:ml-52 object-cover object-center"
          alt=""
        />
      </div>

      <div
        className={` w-full mt-16 pb-14 flex flex-col sm:flex-row flex-wrap justify-center gap-10`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
