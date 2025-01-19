import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-[url("/adobebg.png")] bg-cover bg-right
         h-[500px] md:h-[600px] '>
            <div className='text-white flex flex-col justify-center items-center w-full  '>
                <div className='lg:w-4/5 flex flex-col gap-y-5  pl-6 text-left'>
                    <p className='font-poppins font-semibold text-sm'>Adobe for teams</p>
                    <h1 className='font-montserrat font-bold text-5xl'>Migrate to Nest: Your New Digital Home Awaits!</h1>
                    <p className='font-poppins text-sm'>Nest Nepal is here to make your website migration process smooth, hassle-free, and, best of all, completely free of charge.</p>
                <div className="sm:max-md:flex my-4 font-dmsans">
                  <button className='bg-white px-7 py-3 text-sm text-black font-medium'>Contact Us</button>
                  <button className=' px-10 py-4 text-sm '>WhatsApp Us &#8599;</button>
                  </div>
                  </div>
            </div>
            <div className='hidden lg:flex items-end justify-center h-full pb-10'>
                <Image height={509} width={600} alt='photoshop' src="/photoshop.png"/>
            </div>
        </div>
    </div>
  )
}

export default page