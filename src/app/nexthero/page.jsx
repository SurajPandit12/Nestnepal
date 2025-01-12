function Page() {
    return (
      <div>
        <div className="grid lg:grid-cols-[28%_72%] md:grid-cols-1 gap-3 container mt-10">
          <div className="bg-gradient-to-b from-[#2626C0] to-[#6060E1] text-white px-8 py-8  flex flex-col justify-center  rounded-md ">
            <p className="font-poppins text-sm font-semibold">Business Hosting</p>
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat leading-[112%] mb-3 max-w-80">
            Grow your Business with Nest Nepal.
            </h1>
            <p className="font-dmsans md:text-sm tracking-[1%] max-w-80 ">
              Fast, secure, and scalable hosting solutions tailored to elevate your WordPress website's performance and reliability seamlessly.
            </p>
            <div className="flex py-2 md:px-2 rounded-lg mt-6">
              <button className="bg-white text-[#1818B3] text-xs  md:text-[17.28px] font-dmsans py-4  px-6  ">
                Check Plans
              </button>
              <div className="flex">
                <button className="font-dmsans text-xs md:text-sm tracking-[1%] pl-8 flex items-center">
                  Get a quotation
                  <img src="arrow_white.png" className="h-[10px] w-[10px] ml-2 object-contain text-white" alt="Arrow right" />
                </button>
              </div>
            </div>
          </div>
          <div>
          <div className="bg-[url('/bground.png')] bg-cover bg-no-repeat h-full">
  <div className="flex justify-center h-full ">
    <img src="groupgirl.png" className="mt-9 hidden object-cover  lg:flex h-auto w-[70%]"  />
  </div>
</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Page;
  