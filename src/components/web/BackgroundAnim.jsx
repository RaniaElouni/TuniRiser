"use client";

import React from "react";
import { BoxesContainer } from "./BoxesContainer";




export const BackgroundAnim = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesContainer />
      <h1 className="md:text-4xl text-xl text-white relative z-20 !p-0 !m-0">
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
};
