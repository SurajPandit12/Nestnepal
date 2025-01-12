import React from 'react'

function star() {
  return (
    <div className='container'>
        <div className='font-dmsans md:flex   mt-5 border-t-2 border-b-2'>
           <div className='flex items-center justify-center md:max-w-[200px] pl-4 font-dmsans text-[18px] mr-6 '> 
           <p>Trusted and recommended over</p>
           </div>

           <div className='border-x-[2px] border-black h-full md:h-[80px] my-8 mx-8 '></div>
           <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 md:ml-10  gap-4 container justify-center items-center'>
           <div>
           <p className='flex h-[25px] w-[26px] pb-2 font-poppins text-[18px] font-bold '>
            <img src="st.png"></img>
                Trustpilot
            </p>
         <div className='flex gap-1'>
           <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
         </div>
            <p className='font-dmsans'>TrustScore <span className='font-bold'>4.910,461 </span>reviews</p>
           </div>

           <div >
           <p className='flex h-[25px] w-[26px] pb-2  font-poppins font-semibold text-[18px]'>
            {/* <img src="st.png"></img> */}
                Google
            </p>
         <div className='flex gap-1'>
           <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
         </div>
            <p className='font-dmsans'><span className='font-bold'>4,634 </span>Reviews | <span className="font-bold">4.4/5</span></p>
           </div>

           <div >
           <p className='flex h-[25px] w-[26px] pb-2 '>
           <span className='font-bold italic font-poppins'>host </span>advice
           
            </p>
         <div className='flex gap-1'>
           <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
         </div>
            <p className='font-dmsans'><span className="font-bold">1,585 </span >Reviews | <span className="font-bold">4.6/5</span></p>
           </div>

           <div >
           <p className='flex h-[25px] w-[26px] pb-2 font-poppins font-bold text-[18px]'>
            {/* <img src="st.png"></img> */}
                facebook
            </p>
         <div className='flex gap-1'>
           <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
            <img src="star.png"></img>
         </div>
            <p className='font-dmsans'><span className='font-bold'>621</span> Reviews |<span className='font-bold'> 4.6/5</span></p>
           </div>

           </div>
        </div>
    </div>
  )
}

export default star