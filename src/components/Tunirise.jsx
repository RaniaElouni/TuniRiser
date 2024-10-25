import React from "react";

export default function Tunirise({containerStyles,triseSize,unSize}) {
  return (
    <div className={`${containerStyles}`}>
      <span className={`cursor-pointer text-primary ml-3 HammersmithOne ${triseSize}`} >
        T
      </span>
      <span className={`cursor-pointer text-primary MonumentExtended ${unSize}`}>
        un
      </span>
      <span className={`ursor-pointer text-primary  HammersmithOne  ${triseSize}`}>
        iRise
      </span>
    </div>
    // <div className={`${containerStyles}`}>
    //   <span className="cursor-pointer text-primary ml-3 HammersmithOne text-3xl">
    //     T
    //   </span>
    //   <span className="cursor-pointer text-primary MonumentExtended text-2xl">
    //     un
    //   </span>
    //   <span className="cursor-pointer text-primary  HammersmithOne text-3xl">
    //     iRise
    //   </span>
    // </div>
  );
}
