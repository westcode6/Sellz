import React from 'react'
import { motion } from 'framer-motion' 
import { staggerContainer } from '../utils/motion'
import { styles } from '../styles'
// The Goal for the SectionWrapper Component is that it allows us to wrap our components in it. 
// and Adds sleek motion to this seperate components as we scroll down the page, every section gets the sleek motion
  
const SectionWrapper = (Component, idName) => function HOC() {
    return (
       <>
       <div className='w-full bg-[#F5F7F2] relative'>
       <motion.section 
        variants={staggerContainer()}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.30}}
        className={`${styles.padding} w-full bg-[#F5F7F2] md:max-w-8xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component /> 
        </motion.section>
       </div>
       </>
    )
}
export default SectionWrapper