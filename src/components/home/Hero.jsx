"use client";
import Link from "next/link";
import { Button } from "../ui/button";


import {
  RiArrowDownSLine,
  RiRocketFill,
  RiLightbulbFlashFill,
  RiHeartFill,
} from "react-icons/ri";

// components
import DevImg from "../DevImg";
import Badge from "../Badge";
import Socials from "../Socials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Tunirise from "../Tunirise";


const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className={`${"bg-hero bg-no-repeat bg-bottom bg-cover"} overflow-x-hidden `}
    >
      
      <section
        className="py-12 mt-16 xl:py-10 lg:h-[84vh]  min-h-full dark:bg-none"
        data-aos="fade-right"
      >
        <div className="pr-[2rem] pl-[2rem] max-w-[1400px] mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Your brand shines
              </div>
              <h1
                className="hero-title secondary"
                
              >
                <Tunirise triseSize="sm:text-8xl text-6xl" unSize="sm:text-7xl text-5xl"/>
              </h1>

              {/* <h1 className='h1 mb-4'>Univers Automatisme</h1> */}
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0 text-sm">
                At Tunirise, we believe every brand has a story worth sharing.
                As a dedicated communication and web development agency, we
                empower businesses to thrive in the digital world.
              </p>
              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="gap-x-2 text-white">Contact Us</Button>
                </Link>
                {/* <Link href="/about">
                  <Button variant="" className="gap-x-2 bg-[#FE6E3330]">
                    About Us
                  </Button>
                </Link> */}
              </div>
              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>

            <div className="hidden  xl:flex relative">
              <Badge
                containerStyles="absolute top-[24%] -left-[5rem]"
                icon={<RiLightbulbFlashFill />}
                badgeText="Creativity"
                endCountText={null}
                endCountNum={null}
              />

              <Badge
                containerStyles="absolute top-[55%] -right-8"
                icon={<RiRocketFill />}
                badgeText="Innovation"
              />

              <Badge
                containerStyles="absolute top-[80%] -left-[1rem]"
                icon={<RiHeartFill />}
                badgeText="Commitment"
              />

              <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
              <div className="text-primary w-[510px] h-[462px] bg-no-repeat relative bg-bottom">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 509 462"
                  width="509"
                  height="462"
                >
                  <path
                    fill="currentColor"
                    d="m430.7 91.8c54.9 57.2 92.6 140.1 73.1 203-19.9 63-97.1 105.7-172.3 134.6-74.8 28.9-147.5 44-203.1 19.2-56-24.8-95.4-89.8-115.3-163.4-19.6-73.3-20.3-155.2 19.2-208.8 39.8-53.7 119.4-79.2 195.2-76.1 76.2 2.8 148.3 34.4 203.2 91.5z"
                  />
                </svg>

                <DevImg imgSrc="/hero/developer.png" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
