"use client"

import Image from 'next/image'

function page() {
  return (
    <div className="container mt-6  ">
    <div className="grid grid-cols-1 xl:grid-cols-2 relative">
      <div className="text-black flex flex-col justify-center items-center">
        <div className=" flex flex-col gap-y-8 text-left mb-6">
        
          <h1 className="font-montserrat font-bold leading-[59px] weight-[500] text-5xl">
          Shaping the Future of
          Web Hosting Solutions.
          </h1>
          <p className="font-dmsans text-sm text-[#393939] w-4/5">
          Discover exciting career paths with Nest Nepal, where innovation meets excellence in the ever-evolving world of web hosting solutions.
          </p>
          <div className="flex my-4 font-dmsans tracking-[1%] ">
            <button className="bg-[#1818B3] px-12 py-2 text-sm text-white font-medium tracking-wide rounded-md ">
            Join Us
            </button>
            <button className="px-7 py-3 text-sm flex items-center gap-2">
            View open Positions
              <img src="/quot.png" alt="WhatsApp Icon" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
  
      <div className="hidden xl:flex object-contain ">
        <Image height={700} width={800} alt="photoshop" src="/circle.png" />
      </div>
  
    </div>
    <div className=" absolute top-0 -left-24">
        <Image height={173.53} width={173.5} alt="photoshop" src="/semicircle.png" />
      </div>
  </div>
  
    
    
  )
}

export default page