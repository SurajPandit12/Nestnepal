import React from 'react'
import Image from 'next/image'
function who() {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>
             <div className='lg:flex  items-center justify-center py-5  hidden'>
                         <Image height={278} width={343} src="/nestnepal.png" alt='drive' className=''/>
            </div>
            <div className='flex flex-col justify-center gap-y-10 px-4'>
                <h1 className='font-montserrat font-bold text-5xl'>Who we are</h1>
                <p className='font-dmsans text-sm text-[#393939]'>Nest Nepal started in 2020 with a simple goal: to offer the best web hosting in Nepal. Our focus is on delivering top-notch security, and 24/7 support. We're Nepal's #1 Cloud Service Provider.</p>
                <div><button className='px-8 py-3 bg-black text-white font-poppins font-medium text-sm'>Learn more about us</button></div>
            </div>


        </div>
    </div>
  )
}

export default who