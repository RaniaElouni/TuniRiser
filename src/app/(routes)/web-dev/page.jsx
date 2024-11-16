"use client";

import React from "react";
import { Preview } from "@/components/web/Preview";
import { BackgroundAnim } from "@/components/web/BackgroundAnim";
import { GlobeDemo } from "@/components/web/GlobeDemo";
import { TimelineDemo } from "@/components/web/TimelineDemo";
import { WavyBackground } from "@/components/web/WavyBackground";

import Services from "@/components/home/Services";

export default function page() {
  return (
    <>
      {/* <GlobeDemo /> */}
      <section class="relative w-full h-full min-h-screen  pb-24">
        <main class=" w-full h-full relative ">
          <div class="flex flex-wrap  ">
            <section class="w-full lg:w-[50%] flex flex-col  @md:px-2  dark:bg-[#5BC4C7]">
              <section class="w-full  flex-col-reverse  bg-amber-100">
                <main class="w-full h-[90%] relative flex-col items-start mx-auto pt-24">
                  <section class="relative overflow-hidden  lg:py-20 lg:py-28">
                    <div class="relative isolate z-10">
                      <div class="absolute -z-10 flex -translate-y-1/2 justify-center overflow-hidden inset-x-0 top-1/2 opacity-40">
                        <svg
                          class="h-[60rem] w-[100rem] flex-none stroke-amber-600 opacity-40"
                          aria-hidden="true"
                        >
                          <defs>
                            <pattern
                              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                              width="200"
                              height="200"
                              x="50%"
                              y="50%"
                              patternUnits="userSpaceOnUse"
                              patternTransform="translate(-100 0)"
                            >
                              <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            stroke-width="2"
                            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                          ></rect>
                        </svg>
                      </div>
                    </div>
                    <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
                      <div class="mx-auto max-w-screen-xl px-2.5 flex flex-col items-center justify-center text-center h-full w-full py-6">
                    
                        <p className="text-2xl  lg:text-5xl   lg:leading-[4.5rem] text-center px-4">
                        Unlock international
                          <span className="bg-primary px-3 py-1 lg:py-2 rounded-xl text-white">
                          opportunities 
                          </span>{" "}
                          by developing
                          applications that 
                          <span className="text-primary px-3">
                          reach customers everywhere
                          </span>
                        </p>
                      </div>
                    </div>
                  </section>
                </main>
              </section>
            </section>

            <section class="relative w-full lg:w-[50%]">
              <GlobeDemo />
            </section>
          </div>
        </main>
      </section>
      <Services isWeb={true} />
      <TimelineDemo />
      <div className="relative">
        <WavyBackground backgroundFill="#ffffff" />
      </div>
    </>
  );
}
