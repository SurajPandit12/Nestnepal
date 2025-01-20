"use client"

import Image from 'next/image'

function page() {
  return (
    <div className="container mt-6 relative">
    <div className="grid grid-cols-1 xl:grid-cols-2 relative">
      <div className="text-black flex flex-col justify-center items-center">
        <div className="lg:w-4/5 flex flex-col gap-y-3 text-left">
          <div className="flex">
            <p className="font-poppins font-semibold text-sm bg-[rgba(32,110,173,0.5)] text-white py-1 px-2">
              Zoho CRM
            </p>
          </div>
          <h1 className="font-montserrat font-bold text-5xl">
            Transform Your Business with Zoho CRM Solutions
          </h1>
          <p className="font-dmsans text-sm text-[#393939] w-11/12">
            Take control of customer relationships and business operations with Zoho CRM. At Nest Nepal, we help you customize solutions that boost growth and efficiency across all areas of your business.
          </p>
          <div className="flex my-4 font-dmsans tracking-[1%] ">
            <button className="bg-[#206EAD] px-7 py-3 text-sm text-white font-medium tracking-wide rounded-sm ">
              Contact Us
            </button>
            <button className="px-7 py-3 text-sm flex items-center gap-2">
              WhatsApp Us
              <img src="/quot.png" alt="WhatsApp Icon" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
  
      <div className="hidden xl:flex object-contain mb-16">
        <Image height={600} width={800} alt="photoshop" src="/zohohero.png" />
      </div>
  
      <div className="mx-auto max-w-screen-lg bg-[#FFFFFF] shadow-2xl rounded-md pb-4 absolute left-[46%] top-[340px] hidden 2xl:flex flex-col">
        <div className="flex justify-center items-center py-2">
          <Image height={35} width={35} src="/calend.png" alt="calendar" />
        </div>
        <div className="flex flex-col justify-center items-center text-center font-dmsans px-6 gap-y-1">
          <h1 className="font-montserrat font-bold text-sm">Book appointment</h1>
          <p className="font-poppins font-medium text-xs max-w-40 text-[#6D6969]">
            Speak with our experts about your goals
          </p>
          <button className="bg-[#206EAD] py-2 px-3 font-poppins font-medium text-xs tracking-[1%] rounded-sm text-white my-1">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  </div>
  
    
    
  )
}

export default page