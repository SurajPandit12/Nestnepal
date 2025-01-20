"use client"

import Image from 'next/image'

function page() {
  return (
    <div className='container mt-6'>
        <div className='grid grid-cols-1 xl:grid-cols-2  relative
         '>
            <div className='text-black flex flex-col justify-center  items-center w-full  '>
                <div className='lg:w-4/5 flex flex-col gap-y-3 text-left '>
                    <div className='flex'><p className='font-poppins font-semibold text-sm bg-gradient-to-r from-[rgba(179,93,183,0.30)] to-[rgba(179,93,183,0.30)] py-1 px-2 rounded-sm'>Visual Studio</p></div>
                    <h1 className='font-montserrat font-bold text-5xl'>Visual Studio: The Complete Toolkit For Developers</h1>
                    <p className='font-dmsans text-sm text-[#393939]'>Unlock your coding potential with Visual Studio, the ultimate development toolkit. Build, debug, and deploy apps faster with powerful tools and seamless integrations.</p>
                    <div className="flex  my-4 font-dmsans tracking-[1%]">
                    <button className="bg-[#B25DB7] px-7 py-3 text-sm text-white font-medium tracking-wide">
                       Contact Us
                         </button>
                       <button className="px-7 py-3 text-sm flex items-center gap-2">
                          WhatsApp Us
                        <img src="/quot.png" alt="WhatsApp Icon" className="w-4 h-4" />
                         </button>
                          </div>
                  </div>
            </div>

            <div className='hidden xl:flex object-contain mb-16 z-[2]'>
                <Image height={1200} width={900} alt='photoshop' src="/visual.png"/>
            </div>
            <div className='absolute top-[13%] left-[72%] h-0 w-0 lg:min-h-[500px] lg:min-w-[500px] z-[1] hidden xl:block   '
            style={{
                background:" radial-gradient(circle, rgba(100, 32, 106, 0.5) 0%, rgba(255, 255, 255, 1) 50%,  rgba(255, 255, 255, 1) 100%)"
            }}
            ></div>


        <div className=' mx-auto max-w-screen-lg bg-[#FFFFFF] shadow-2xl rounded-md pb-4 relative left-[38%] -top-40  hidden xl:flex flex-col '>
          
          <div className='flex justify-center items-center py-2'>
                <Image height={35} width={35} src="/calen.png" alt='calendar'/>
            </div>
            <div className='flex flex-col justify-center items-center text-center  px-6 gap-y-1'>
                <h1 className='font-montserrat font-bold text-sm '>Book appointment</h1>
                <p className='font-poppins font-medium text-xs max-w-40 text-[#6D6969]'>Speak with our experts about your goals</p>
                <button className='bg-[#1818B3] py-2 px-3 font-poppins font-medium text-xs tracking-[1%] rounded-sm text-white my-1'>Schedule Now</button>
            </div>
       
        </div>
        </div>
    
    
    </div>
    
    
    
  )
}

export default page