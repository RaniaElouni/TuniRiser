"use client";

import React from "react";
import { Preview } from "@/components/web/Preview";
import { BackgroundAnim } from "@/components/web/BackgroundAnim";
import { GlobeDemo } from "@/components/web/GlobeDemo";
import { TimelineDemo } from "@/components/web/TimelineDemo";
import {WavyBackground} from "@/components/web/WavyBackground";

import Services from "@/components/home/Services";

export default function page() {
  return (
    <>
        <GlobeDemo />
        <Services isWeb={true} />
        <TimelineDemo />
        <div className="relative">

        <WavyBackground backgroundFill="#ffffff" />
        </div>

    </>
  );
}
