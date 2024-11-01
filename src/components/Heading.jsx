"use client"

import React from 'react'
import Lottie  from "lottie-react";


export default function Heading({tit1,tit2,withLottie}) {
  return (
    <div className={`flex mx-4 z-50 flex-col md:flex-row justify-between items-center ${tit1 !== "ABOUT US" ? "mb-12 ":"" }xl:mb-12 `}>
          <h2
            className="section-title text-sm text-center md:text-left lg:text-4xl xl:text-5xl"
            style={{
              fontFamily: "AgainstRegular",
            }}
          >
            {tit1}
          {withLottie &&  <Lottie animationData={withLottie} loop={true}  className="xl:w-[6rem] mb-2 lg:w-[5rem] md:w-[4rem] sm:w-[3rem] w-[3rem]" />} 

          </h2>

          <h2
            className={`opacity-20 z-50  ${tit1==="OUR TEAM" ? "mx-12":""} text-[1.4rem]   lg:text-4xl xl:text-5xl`}
            style={{
              fontFamily: "AgainstRegular",

            }}
          >
            {tit2}
          </h2>
        </div>
  )
}
