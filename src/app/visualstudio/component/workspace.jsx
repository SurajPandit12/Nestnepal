import Image from "next/image"

function optimize() {
    return (
      <div className="container mt-8">
      

       <div className="my-16">
       <div className=" flex justify-center" > <h2 className="px-3 py-1 text-[#B25DB7] border border-[#B25DB7] font-poppins text-sm">Navigating The Perks</h2></div>

       <h1 className="font-montserrat font-bold text-4xl py-4 text-center text-[#B25DB7] ">Visual Studio<span className="text-black"> offering with Nest Nepal </span></h1>
        <p className="font-poppins text-sm text-center text-[#393939] max-w-[905px] mx-auto tracking-[1%]">Efficiency Boost: Seamlessly integrate Microsoft 365 with Nest Nepal's services to empower teams and enhance productivity with streamlined operations.</p>
           
       </div>
          <div className='grid grid-cols-1 md:grid-cols-2  items-center mb-12 '>
         
             <div className="ml-10 container">
             <p className="font-dmsans font-light  text-xl text-[#6A6A6A]  ">Hassle-Free Transfers</p>
             <h1 className='text-4xl  font-poppins tracking-[1%] pb-8 max-w-xl font-[700] py-6'>Boost Development Productivity with Visual Studio
              </h1>
              <p className="max-w-xl font-dmsans text-sm tracking-[1%] py-4 ">Visual Studio makes coding faster and easier with features like code completion, version control, and debugging tools. At Nest Nepal, we’re here to help you unlock its full potential and build apps that perform at their best.</p>
              <ul className='list-disc text-sm ml-8 font-poppins grid py-6  text-[#393939] max-w-xl'>
              <li>Write code faster with intelligent suggestions and auto-completion.</li>
                  <li>
                  Simplify collaboration with built-in Git version control tools.</li>
                  <li>
                  Debug and troubleshoot efficiently using advanced debugging features.</li>
                  <li>
                  Build cross-platform applications with ease and flexibility.</li>
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
                  <h1 className="text-4xl  font-poppins py-6 font-[700] max-w-[500px]">Unlock Development Potential with Visual Studio</h1>
                  <p className="text-sm font-dmsans font-light max-w-xl">Visual Studio provides tools to manage and optimize apps effectively. With real-time insights, seamless integrations, and an intuitive interface, it helps teams develop high-quality apps faster. Every process is streamlined for speed and quality.</p>
                  <ul className='list-disc py-8 text-sm ml-8 font-poppins grid  max-w-xl text-[#393939]'>
                  <li>Manage your entire codebase with integrated version control.</li>
                  <li>
                  Collaborate seamlessly with your team using real-time updates.</li>
                  <li>
                  Customize your development workspace with a wide range of extensions.</li>
                  <li>Optimize application performance with insightful real-time metrics.</li>
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