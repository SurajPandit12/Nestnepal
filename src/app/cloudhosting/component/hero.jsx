
function page() {
    return (
      <div className="grid grid-cols-1  md:grid-cols-10 gap-6 container mt-12">
          <div className='grid  col-span-7 grid-cols-[60%_40%]  bg-gradient-to-br from-[#FFFFFF] via-[#F3F8FC] to-[#F6FBFF] '>
              <div className='mx-auto pl-6 pt-8'>
                  <p className="text-[14px] pb-4 font-poppins font-semibold text-[#6A6A6A] ">Cloud Hosting in Nepal</p>
                  <h1 className="font-bold text-[40px] font-montserrat leading-[50px] pb-4 max-w-[500]">
                  Unleash the power of Cloud Hosting
                  </h1>
                  <p className="w-3/4 text-[16px] font-dmsans ">Elevate your online business with optimized hosting solutions, ensuring fast, secure, and scalable ecommerce platforms for enduring success and continuous growth.</p>
                  <div className="sm:max-md:flex my-8">
                  <button className='bg-[#1818B3] px-7 py-4 text-white md:text-[19.2px] font-dmsans'>Check Plan</button>
                  <button className=' px-8 py-4 md:text-[19.2px] font-dmsans'>Get a quotation</button>
                  </div>
              </div>
              <div className='hidden sm:flex w-[440px] h-[425px]'>
                  <img src="/cloud.png">
                  </img>
              </div>
          </div>
  
          <div className="col-span-3 rounded-sm  ">
              <div className="bg-[#5468FF] text-center text-white mb-6 flex flex-col items-center py-12 gap-2 pb-10 rounded-xl font-poppins text-[16px]">
              <p>3-year purchase required. </p>
              <h2 className="font-bold  w-2/3 tracking-wide font-montserrat text-[25px]"> 
              Available only at Rs. 1,099 /mo 
              </h2>
              <button className="text-black bg-white px-3 py-2 text-[17px] font-dmsans rounded-md">Host Website</button>
              </div>
  
              <div className="bg-[#EDF8FF] flex items-center justify-between  rounded-xl  tracking-[1%] text-[20px] overflow-hidden">
              <p className="font-semibold  font-dmsans text-[#000000] max-w-[125px] pl-5 ">Scale UP with Cloud Hosting</p>
              <img className="h-[184px] w-[197px]" src="lock.png"  />
            </div>
  
          </div>
  
         
      </div>
    )
  }
  
  export default page