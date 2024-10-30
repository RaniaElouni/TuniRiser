import React from "react";
import Heading from "../Heading";

export default function SoundQuality() {
  return (
    <div className="sm:container relative pb-48 overflow-hidden">
      <Heading tit1="Sound Quality" tit2="Sound Quality" />

      <div class=" flex  overflow-hidden flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            class="h-full rounded-lg w-full object-cover"
            src="/media/img1.webp"
            alt="Winding mountain road"
          />
        </div>

        <div class="max-w-sm bg-white md:max-w-2xl md:z-10 md:shadow-lg absolute top-72  lg:left-6 lg:top-1 md:mt-24 rounded-lg lg:mt-32 lg:mr-4 xl:mt-40 xl:ml-12">
          <div class="flex flex-col p-12 md:px-16 lg:px-4">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              Winding Mountain Road
            </h2>
            <p class="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>

            <div class="mt-8">
              <a
                href="#"
                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
   
    </div>
  );
}
