import React from 'react'
import Image from 'next/image'
function hero() {
  return (
    <div className='container'>
        <div className="bg-[url('/cloudbg.png')] bg-cover bg-no-repeat h-[500px] md:h-[670px] grid-cols-1 grid lg:grid-cols-2">
            <div className='flex flex-col justify-center items-center h-full text-white'>
                <div className='max-w-xl text-center lg:text-start '>
                    <h1 className='font-montserrat font-bold text-5xl leading-[59px]'>Migrate to Nest: Your 
                     New Digital Home
                     Awaits!</h1>
                     <p className='font-dmsans font-medium text-sm py-6 max-w-lg pr-5'>Nest Nepal is here to make your website migration process smooth, hassle-free, and, best of all, completely free of charge.</p>
                     <div className="sm:max-md:flex my-8 font-dmsans">
                  <button className='bg-white px-7 py-3  text-sm text-black  font-[500]'>Check Plan</button>
                  <button className=' px-10 py-4 text-sm '>WhatsApp Us</button>
                  </div>
                </div>

            </div>
            <div className='xl:flex items-end justify-center hidden '>
                <Image height={700} width={610} alt='' src="/speakergirl.png" />
            </div>

        </div>
    </div>
  )
}

export default hero