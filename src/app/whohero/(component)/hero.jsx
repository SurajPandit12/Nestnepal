import Image from "next/image";


function hero() {
  return (
    <div className="container">
        <div className="bg-[url('/backing.png')] h-[700px] bg-cover relative ">
        <div className='grid grid-cols-1 lg:grid-cols-10 h-full'>
            <div className=' md:col-span-4  items-end h-full w-full hidden 2xl:flex  '>
            <Image  width={732} height={670} alt="" src="/gridr.png"/>

            </div>
            <div className="flex flex-col lg:items-end justify-center h-full w-full text-white gap-4 lg:absolute lg:right-[14%] md:top-10  lg:col-span-6 px-6 ">
             <h1 className="font-montserrat font-bold  text-4xl lg:text-5xl leading-40  lg:text-left lg:w-2/5">WHOIS Lookup By Nest Nepal</h1>
             <p className="lg:w-2/5 font-dmsans text-lg leading-5">Easily check domain ownership, registration details, and more with Nest Nepal’s WHOIS Lookup. Get all the details you need in one place, without any hassles.</p>
               </div>
     

          </div>

        </div>

        <div>
        <div className="bg-white md:px-6 py-6 rounded-lg shadow-lg lg:w-5/6 mx-auto relative top-[-80px]">
          <div className="flex flex-wrap md:px-4 py-2 sm:mx-4 mt-4">
            <div className="md:px-8 rounded-lg py-2 flex justify-between border w-4/5  mx-auto font-dmsans outline-none">
              <input
                type="text"
                placeholder="Enter Your Name Here..."
                className="outline-none mr-4 font-dmsans w-[80%]"
              />
              <select className="text-xl font-medium font-dmsans outline-none">
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".xyz">.xyz</option>
                <option value=".xyz">.biz</option>
              </select>
            </div>
            <button className=" mx-auto  px-10 py-2  bg-black font-dmsans font-bold text-lg text-white rounded-md   ">
              Search
            </button>
          </div>
        
        
        </div>
        </div>
    </div>
  )
}

export default hero