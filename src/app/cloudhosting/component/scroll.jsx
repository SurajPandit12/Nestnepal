function Scroll() {
    return (
      <div className="container mt-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              className="object-contain drop-shadow-lg rounded-[7.2px] h-[300px] md:h-[406px] w-[230px] md:w-[308px] "
              src="Mustard.png"
              alt="Product"
            />
          </div>
  
          {/* Text and Arrows Section */}
          <div className="flex flex-col justify-center items-start w-full md:w-2/3 md:mx-auto">
            <div>
              <h1 className="text-[24px] md:text-[36.45px] font-dmsans leading-tight font-medium pb-8">
                Building our website with
                <span className="text-[#1818B3]"> Nest Nepal cPanel</span> was
                user-friendly and as easy as delivering food to our customers.
              </h1>
              <div className="relative w-full md:w-[666px] h-[1.5px] bg-gradient-to-r from-white via-gray-600 to-white"></div>
            </div>
            <div className="flex justify-between items-center w-full pt-6">
              <div>
                <h2 className="text-[16px] md:text-[18px] font-semibold">Sunil Yadav</h2>
                <p className="text-[14px] md:text-[16px]">Founder of Bhojmandu</p>
              </div>
              <div className="flex space-x-4">
                <button>
                  <img
                    className="h-[32px] md:h-[48px] w-[32px] md:w-[48px] object-contain"
                    src="arrow (2).png"
                    alt="Previous"
                  />
                </button>
                <button>
                  <img
                    className="rotate-180 h-[32px] md:h-[48px] w-[32px] md:w-[48px] object-contain"
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
  