

import React from 'react'
import { styles } from '../styles'

export default function Cta () {
  return (
   <>
   <div className={`${styles.padding} w-full md:max-w-6xl mx-auto  `}>
            <div className='w-full bg-[#0f0f0f]  shadow-2xl py-5 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center text-center py-6'>
                      

                        <div className='w-full sm:max-w-2xl mx-auto'>
                            <h1 className={`${styles.heroHeadText}`}>LET'S DISCUSS YOUR IDEAS</h1>

                            <div className='my-4 flex flex-col sm:flex-row items-center justify-center gap-4'>
                                {/* <button className='px-6 py-4 bg-neutral-800 hover:bg-white rounded-full text-priRed uppercase text-base font-bold'>talks now</button> */}

                                <button className='px-6 mt-10 py-3 hover:bg-white hover:border-white border-2 border-amber-400 rounded-full text-amber-400 uppercase text-base font-bold'>follow us</button>
                            </div>
                        </div>
                    </div>
            </div>
   </div>
   </>
  )
}
