import Image from "next/image"

function optimize() {
    return (
      <div className="container mt-8">
       <div className="my-16">
       <h1 className="font-montserrat font-bold text-4xl text-center">So, what do <span className="text-blue-700">you</span> get ?</h1>
        <p className="font-poppins font-medium text-lg text-center text-[#393939] ">Easy domain setup, WHOIS protection, and free website migration</p>
           
       </div>
          <div className='grid grid-cols-1 md:grid-cols-2  items-center mb-12 '>
         
             <div className="ml-10 container">
             <p className="font-dmsans   text-xl text-[#1818B3] font-[500] ">Optimized Hosting</p>
             <h1 className='text-4xl  font-poppins tracking-[1%] pb-8 max-w-lg font-[700] py-6'> Seamless and Efficient Migration Process
              </h1>
              <p className="max-w-xl font-dmsans text-sm tracking-[1%] py-4">At Nest Nepal, we work toward ensuring that the migration process is simple and hassle-free for all our clients. Our expert team ensures no data loss and minimal downtime. Migration processes at Nest Nepal are conducted in the following steps:</p>
              <ul className='list-disc text-sm ml-8 font-poppins font-light grid gap-4 max-w-xl'>
              <li>Full assessment of your current infrastructure.</li>
                  <li>A customized migration plan to suit your needs.</li>
                  <li>Smooth and safe data transfer.</li>
                  <li>Ongoing support after migration for optimal performance.</li>
              </ul>
              <div className="mt-4">
                    <button className='border-2 border-black px-16 py-2 ml-4 font-dmsans'>Get Started</button>
               </div>
             </div>
             <div className="hidden lg:flex">
             
              <Image width={697.95} height={580.14} src="/gwork.png" alt="" />
             </div>
            
          </div>  
          <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
              <div className="rounded-3lg hidden lg:flex">
             
              <Image width={697.95} height={580.14} src="/videocall.png" alt="" />
  
              </div>
              <div className="ml-10 font-dmsans">
                <p className="font-dmsans font-light text-xl text-[#6A6A6A] ">Performance-Driven Hosting</p>
                  <h1 className="text-4xl  font-poppins py-6 font-[700] max-w-[500px]">Optimized Website Speed and Responsiveness</h1>
                  <p className="text-sm font-dmsans font-light max-w-xl text-[#393939]">At Nest Nepal, we work toward ensuring that the migration process is simple and hassle-free for all our clients. Our expert team ensures no data loss and minimal downtime. Migration processes at Nest Nepal are conducted in the following steps.</p>
                  <ul className='list-disc py-8 text-sm ml-8 font-poppins font-light grid gap-4 max-w-xl'>
                  <li>Effortless migration with minimal downtime.</li>
                  <li>Instant page loads for a seamless experience.</li>
                  <li>Easily handle traffic spikes without performance loss.</li>
                  <li>Continuous availability to keep your business online.</li>
              </ul>
                  <div className="mt-4">
                    <button className='border-2 border-black px-16 py-2 ml-4 font-dmsans'>Get Started</button>
               </div>
               
  
              </div>
          </div>
  
  
      </div>
    )
  }
  
  export default optimize