"use client";

import React from 'react'
import { Preview } from '@/components/web/Preview'
import { BackgroundAnim } from "@/components/web/BackgroundAnim"
import { GlobeDemo } from "@/components/web/GlobeDemo"



export default function page() {
  return (
    // <div>
    // <section class="text-gray-600 body-font">
    //     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //         <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    //             <img class="object-cover object-center rounded" alt="hero" rounded-full
    //                 src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    //         </div>
    //         <div
    //             class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    //             <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get ready to be fit
    //                 <br class="hidden lg:inline-block"/>Let's hit the zym
    //             </h1>
    //             <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
    //                 plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
    //                 authentic tumeric truffaut hexagon try-hard chambray.</p>
    //             <div class="flex justify-center">
    //                 <button
    //                     class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    //                 <button
    //                     class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    //             </div>
    //         </div>
    //     </div>
    // </section>










    // <section class="text-gray-600 body-font">
    //     <div class="joining">
    //         <h3 class="step">Step of how it works</h3>
    //     </div>
    //     <div class="container px-5 py-24 mx-auto flex flex-wrap">
    //         <div class="flex flex-wrap w-full">
    //             <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
    //                 <div class="flex relative pb-12">
    //                     <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
    //                         <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                     </div>
    //                     <div
    //                         class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    //                         </svg>
    //                     </div>
    //                     <div class="flex-grow pl-4">
    //                         <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
    //                         <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
    //                             bespoke try-hard cliche palo santo offal.</p>
    //                     </div>
    //                 </div>
    //                 <div class="flex relative pb-12">
    //                     <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
    //                         <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                     </div>
    //                     <div
    //                         class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                             <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    //                         </svg>
    //                     </div>
    //                     <div class="flex-grow pl-4">
    //                         <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
    //                         <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
    //                             slow-carb health goth, vape typewriter.</p>
    //                     </div>
    //                 </div>
    //                 <div class="flex relative pb-12">
    //                     <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
    //                         <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                     </div>
    //                     <div
    //                         class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                             <circle cx="12" cy="5" r="3"></circle>
    //                             <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
    //                         </svg>
    //                     </div>
    //                     <div class="flex-grow pl-4">
    //                         <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
    //                         <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1
    //                             master cleanse blog taiyaki.</p>
    //                     </div>
    //                 </div>
    //                 <div class="flex relative pb-12">
    //                     <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
    //                         <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                     </div>
    //                     <div
    //                         class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                             <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    //                             <circle cx="12" cy="7" r="4"></circle>
    //                         </svg>
    //                     </div>
    //                     <div class="flex-grow pl-4">
    //                         <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
    //                         <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
    //                             bespoke try-hard cliche palo santo offal.</p>
    //                     </div>
    //                 </div>
    //                 <div class="flex relative">
    //                     <div
    //                         class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                             <path d="M22 4L12 14.01l-3-3"></path>
    //                         </svg>
    //                     </div>
    //                     <div class="flex-grow pl-4">
    //                         <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
    //                         <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever
    //                             cold-pressed retro.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
    //                 src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="step"/>
    //         </div>
    //     </div>
    // </section>



    // <hr/>



    // <section class="text-gray-600 body-font overflow-hidden">
    //     <div class="container px-5 py-24 mx-auto">
    //         <div class="flex flex-col text-center w-full mb-20">
    //             <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
    //             <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Cost for download toutorial for
    //                 fitness training</p>
    //             <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
    //                 <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
    //                 <button class="py-1 px-4 focus:outline-none">Annually</button>
    //             </div>
    //         </div>
    //         <div class="flex flex-wrap -m-4">
    //             <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    //                 <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
    //                     <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
    //                     <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Tumeric plaid portland
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-6">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Mixtape chillwave tumeric
    //                     </p>
    //                     <button
    //                         class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
    //                             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //                         </svg>
    //                     </button>
    //                     <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    //                 <div
    //                     class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
    //                     <span
    //                         class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
    //                     <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
    //                     <h1
    //                         class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
    //                         <span>$38</span>
    //                         <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
    //                     </h1>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Tumeric plaid portland
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Hexagon neutra unicorn
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-6">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Mixtape chillwave tumeric
    //                     </p>
    //                     <button
    //                         class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
    //                             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //                         </svg>
    //                     </button>
    //                     <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    //                 <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
    //                     <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
    //                     <h1
    //                         class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
    //                         <span>$56</span>
    //                         <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
    //                     </h1>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Tumeric plaid portland
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Hexagon neutra unicorn
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-6">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Mixtape chillwave tumeric
    //                     </p>
    //                     <button
    //                         class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
    //                             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //                         </svg>
    //                     </button>
    //                     <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    //                 <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
    //                     <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
    //                     <h1
    //                         class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
    //                         <span>$72</span>
    //                         <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
    //                     </h1>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Tumeric plaid portland
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Hexagon neutra unicorn
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-2">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Vexillologist pitchfork
    //                     </p>
    //                     <p class="flex items-center text-gray-600 mb-6">
    //                         <span
    //                             class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
    //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                                 stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
    //                                 <path d="M20 6L9 17l-5-5"></path>
    //                             </svg>
    //                         </span>Mixtape chillwave tumeric
    //                     </p>
    //                     <button
    //                         class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
    //                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    //                             stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
    //                             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //                         </svg>
    //                     </button>
    //                     <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>










    // <section class="text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-col text-center w-full mb-20">
    //         <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
    //         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This is our honourable team if u find any query or difficulty you can contact them all are very expriensive zym trainer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure rerum aut accusantium quidem sed cum quam quia veniam blanditiis, repellendus ipsum similique exercitationem. .</p>
    //       </div>
    //       <div class="flex flex-wrap -m-4">
    //         <div class="p-4 lg:w-1/2">
    //           <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    //             {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="rahul2.jpeg"> */}
    //             <div class="flex-grow sm:pl-8">
    //               <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
    //               <h3 class="text-gray-500 mb-3">UI Developer</h3>
    //               <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    //               <span class="inline-flex">
    //                 <a class="text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="p-4 lg:w-1/2">
    //           <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    //             {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="rahul.jpeg"> */}
    //             <div class="flex-grow sm:pl-8">
    //               <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
    //               <h3 class="text-gray-500 mb-3">Designer</h3>
    //               <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    //               <span class="inline-flex">
    //                 <a class="text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="p-4 lg:w-1/2">
    //           <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    //             {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="rahul2.jpeg"> */}
    //             <div class="flex-grow sm:pl-8">
    //               <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
    //               <h3 class="text-gray-500 mb-3">UI Developer</h3>
    //               <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    //               <span class="inline-flex">
    //                 <a class="text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="p-4 lg:w-1/2">
    //           <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    //             {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="rahul.jpeg"> */}
    //             <div class="flex-grow sm:pl-8">
    //               <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
    //               <h3 class="text-gray-500 mb-3">Designer</h3>
    //               <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
    //               <span class="inline-flex">
    //                 <a class="text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a class="ml-2 text-gray-500">
    //                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>









    //   <section class="text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-col text-center w-full mb-20">
    //         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our fitness group</h1>
    //         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cumque atque officia!</p>
    //       </div>
    //       <div class="flex flex-wrap -m-4 text-center">
    //         <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //           <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //               <path d="M8 17l4 4 4-4m-4-5v9"></path>
    //               <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
    //             </svg>
    //             <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
    //             <p class="leading-relaxed">Downloads</p>
    //           </div>
    //         </div>
    //         <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //           <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //               <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    //               <circle cx="9" cy="7" r="4"></circle>
    //               <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
    //             </svg>
    //             <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
    //             <p class="leading-relaxed">Users</p>
    //           </div>
    //         </div>
    //         <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //           <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //               <path d="M3 18v-6a9 9 0 0118 0v6"></path>
    //               <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
    //             </svg>
    //             <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
    //             <p class="leading-relaxed">Files</p>
    //           </div>
    //         </div>
    //         <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //           <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    //             </svg>
    //             <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
    //             <p class="leading-relaxed">Places</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>







    //   <footer class="text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-wrap md:text-left text-center order-first">
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">First Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Second Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Third Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">First Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Second Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Third Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">First Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Second Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Third Link</a>
    //             </li>
    //             <li>
    //               <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
    //           <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    //             <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
    //               <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
    //               {/* <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
    //             </div>
    //             <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    //           </div>
    //           <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
    //             <br class="lg:block hidden"/>waistcoat green juice
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="bg-gray-100">
    //       <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    //         <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //             {/* <img src="rahul.jpeg" alt="" width="30px" height="30px"> */}
    //        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"> 
    //             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //           </svg>
    //           <span class="ml-3 text-xl">Tailblocks</span>
    //         </a>
    //         <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
    //           <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
    //         </p>
    //         <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    //           <a class="text-gray-500">
    //             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    //               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
    //               <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
    //               <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //             </svg>
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

  
<GlobeDemo/>

  )
}
