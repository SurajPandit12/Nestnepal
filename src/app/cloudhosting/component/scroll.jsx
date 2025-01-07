function Scroll() {
    return (
      <div className="container mt-5">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
          <div>
            <img
              className="object-contain drop-shadow-lg rounded-[7.2px] h-[406px] w-[308px] hidden md:flex"
              src="Mustard.png"
              alt="Product"
            />
          </div>
          <div className="flex flex-col md:justify-center items-start  md:w-2/3 md:mx-auto">
            <div className="">
              <h1 className="text-[36.45px] font-dmsans leading-tight font-medium pb-8">
                Building our website with
                <span className="text-[#1818B3]"> Nest Nepal cPanel</span> was
                user-friendly and as easy as delivering food to our customers.
              </h1>
              <div className="relative w-[666px] h-[1.5px] bg-gradient-to-r from-white via-gray-600 to-white"></div>
            </div>
            <div className="flex justify-between items-center w-full pt-6">
              <div>
                <h2 className="font-semibold">Sunil Yadav</h2>
                <p>Founder of Bhojmandu</p>
              </div>
              <div className="flex space-x-4">
               <button> <img
                  className="h-[48px] w-[48px] object-contain"
                  src="arrow (2).png"
                  alt="Previous"
                /></button>
               <button>
               <img
                  className="rotate-180 h-[48px] w-[48px] object-contain"
                  src="arrow (2).png"
                  alt="Next"
                />
               </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Scroll;
  