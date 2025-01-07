
function features() {
  return (
    <div className="">

<div className="text-center mt-8">
    <h1 className="font-montserrat font-bold text-2xl text-[36px] pb-4">All Cloud Hosting plans consist of</h1>
    <p className="font-poppins font-light text-[16px]">Get all these features with our Cloud hosting plans.</p>
</div>

        <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 text-center container gap-6 py-12 px-8 mt-2  ' >
            <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out hover:scale-105 font-dmsans">
               <div className="flex flex-col  items-center">
               <img  className="h-[48px] w-[48px] mb-3" src="Group.png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Automatic Software update</h1>
                <p className="font-light text-[15px]">keep your website secured and automatic update</p>
             </div>
             <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out  hover:scale-105 font-dmsans">
               <div className="flex flex-col items-center">
               <img  className="h-[48px] w-[48px] object-contain mb-3" src="backup (2).png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Automatic Backups</h1>
                <p className="font-light text-[15px]">Your data is automatically backed up for easy recovery</p>
             </div>
             <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out  hover:scale-105 font-dmsans">
               <div className="flex flex-col items-center">
               <img  className="h-[48px] w-[48px] object-contain mb-3" src="arrow.png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Built-in SEO Tools</h1>
                <p className="font-light text-[15px]">Boost your sites rankings with built-in SEO tools.</p>
             </div>
           
             <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out  hover:scale-105 font-dmsans">
               <div className="flex flex-col items-center">
               <img  className="h-[48px] w-[48px] mb-3 object-contain" src="hand.png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Scalability and traffic handiling</h1>
                <p className="font-light text-[15px]">Scale effortlessly to handle increased traffic and support business growth</p>
             </div>

             <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out  hover:scale-105 font-dmsans">
               <div className="flex flex-col items-center">
               <img  className="h-[48px] w-[48px] mb-3 object-contain"  src="infi.png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Unlimited Bandwidth</h1>
                <p className="font-light text-[15px]">Enjoy unlimited bandwidth for seamless performance</p>
             </div>
             <div className="bg-[#FBFBFB] px-8 py-12 hover:shadow-md duration-300 transition-all ease-in-out  hover:scale-105 font-dmsans">
               <div className="flex flex-col items-center">
               <img  className="h-[48px] w-[48px] mb-3 object-contain" src="mif.png"></img>
               </div>
                <h1 className="mb-3 text-[20px] font-medium">Easy migration</h1>
                <p className="font-light text-[15px]">Migrate your site quickly with minimal downtime</p>
             </div>
             
        </div>
    </div>
  )
}

export default features