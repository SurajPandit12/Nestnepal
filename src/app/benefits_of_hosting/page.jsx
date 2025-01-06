
function page() {
  return (
    <div>
        <div className="text-center ">
            <h1 className="font-bold text-2xl">Benefits of Web </h1>

            <p className="max-w-screen-lg mx-auto font-light py-4 px-16 font-sans"> Maximize your website's efficiency, security, and flexibility with our innovative cloud hosting solutions. Designed for optimal performance and reliability, tailored to your specific needs.</p>
        </div>
        <div>
            <div className=' grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-screen-lg mx-auto gap-3 '>
                <div className="bg-[#F5E6FF] py-28 px-6">
                    <img src="infinity.png" height={30} width={60} className="pb-3"></img>
                    <h1>Focus on Growing Business</h1></div>
                <div className="relative">
                    <img src="tree.png" h-auto w-auto  >
                </img>
                <div className=" flex justify-center w-full h-full">
                <p className=" absolute top-[41px]  ">Cost-Effective Efficiency</p>
                </div>
             </div>
                <div className=" bg-[#FFF9E6] ">
                    <div className="flex justify-center w-2/3 mx-auto pt-4  ">
                        <h1 >Enhanced Security and Protection.</h1>
                    </div>
                   <div className="h-3/5">
                    
                   <div className=" flex relative bg-white  ml-16 mt-6 w-full h-full rounded-3xl py-4">

<div className="absolute left-[-34px]">
    <img src="security.png" width={83} height={83}></img>
   </div>

   <div className="px-10">
   <p className="pb-2">Secure your e-commerce</p>
    <button className="bg-black text-white  px-8 rounded-2xl py-3">Activate Now</button>
   <div className="flex flex-col justify-start gap-y-2 ">
   <p>Our Services</p>
    <p>✅SSL Certificate</p>
    <p>✅Firewall</p>
   </div>
   </div>
  
</div>
                   </div>
                </div>
                <div className="relative">
  <img src="laptop.png" alt="Laptop" className="h-auto w-auto" />
  <div className="absolute inset-0 flex flex-row justify-center ">
    {/* <img src="sett.png"  height={32} width={32} /> */}
    <p className="mt-2 font-bold ">Optimized <span className="text-orange-400">Performance </span></p>
  </div>
</div>
<div className="col-span-2 bg-gradient-to-r from-[#B4CCE7] to-[#E4F1FF] grid grid-cols-2 rounded-lg">
          <div className="text-[#000076] font-[500] text-[20px] leading-[26.04px]  tracking-wide flex justify-center items-center px-20">
            {" "}
            Reliable Uptime. Guarantee.**
          </div>
          <div className="relative ">
            <img
              className="absolute h-[95px] w-[98px] top-16 left-[-20px]"
              src=""
              alt=""
            />
            <img src="magnolia.png" alt="" />
          </div>
        </div>

            </div>
        </div>
     </div>
  )
}

export default page