
function page() {
    return (
      <div className="grid grid-cols-10 gap-6 container">
          <div className='grid  col-span-7 grid-cols-[60%_40%]  bg-gradient-to-br from-[#FFFFFF] via-[#F3F8FC] to-[#F6FBFF] '>
              <div className='mx-auto pl-6 pt-8'>
                  <p className="font-semibold text-[14px] pb-4 font-poppins ">Cloud Hosting in Nepal</p>
                  <h1 className="font-bold text-[40px] font-montserrat leading-[50px] pb-4 w-2/3">
                  Unleash the power of Cloud Hosting
                  </h1>
                  <p className="w-3/4 text-[16px] font-dmsans ">Elevate your online business with optimized hosting solutions, ensuring fast, secure, and scalable ecommerce platforms for enduring success and continuous growth.</p>
                  <div className="my-8">
                  <button className='bg-[#1818B3] px-6 py-4 text-white text-[19.2px] font-dmsans'>Check Plan</button>
                  <button className=' px-8 py-4 text-[19.2px] font-dmsans'>Get a quotation</button>
                  </div>
              </div>
              <div className='hidden sm:flex'>
                  <img src="/cloud.png">
                  </img>
              </div>
          </div>
  
          <div className="col-span-3 rounded-lg  ">
              <div className="bg-[#5468FF] text-center text-white mb-6 flex flex-col items-center py-16 gap-2 pb-12 rounded-xl">
              <p>3-year purchase required. </p>
              <h2 className="font-bold text-[25px] w-2/3 tracking-wide">
              Available only at Rs. 1,099 /mo 
              </h2>
              <button className="text-black bg-white px-3 py-2">Host Website</button>
              </div>
  
              <div className="bg-[#EDF8FF] flex items-center justify-between  rounded-xl pl-2">
              <p className="font-bold text-lg h-36">Optimize <br></br>your<br /> WordPress <br/>site</p>
              <img className="h-48" src="lock.png"  />
            </div>
  
          </div>
  
         
      </div>
    )
  }
  
  export default page