import React from 'react'

function guarantee() {
  return (
    <div className='bg-[#E42527] mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-[70%_30%] py-5  md:container'>
            <div className='flex flex-col justify-center w-2/3 container gap-6 text-white '>
                <h1 className='text-[36px] font-dmsans font-bold'>14-day money back guarantee</h1>
                <p className='font-dmsans text-[16px] '>Fully explore the features, performance, and assess our customer support. If we do not meet your
                expectations, ask for a refund & we will process it promptly with no questions asked.</p>

            </div>
            <div className='h-[230px] w-[275px] hidden md:flex'>
                <img src="gurarantee.png"></img>

            </div>

        </div>
    </div>
  )
}

export default guarantee