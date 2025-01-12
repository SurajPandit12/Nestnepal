function Page() {
  return (
    <div>
      <div className="grid lg:grid-cols-[25%_75%] md:grid-cols-1 gap-3 container mt-5">
        <div className="bg-[#E7EAFF] px-8 flex flex-col justify-center py-8 md:w-full rounded-md">
          <p className="font-poppins text-sm font-semibold">Reseller Hosting</p>
          <h1 className="text-5xl font-bold font-montserrat leading-[112%] mb-3">
            Your <span className="text-[#1818B3]">Brand,</span><br />
            Your <span className="text-[#1818B3]">Margin!</span>
          </h1>
          <p className="font-dmsans text-sm md:text-sm tracking-[1%] max-w-64">
            Fast, secure, and scalable hosting solutions tailored to elevate your WordPress website's performance and reliability seamlessly.
          </p>
          <div className="flex py-2 md:px-2 rounded-lg mt-6">
            <button className="bg-[#1818B3] text-white text-sm md:text-[17.28px] font-dmsans py-4 px-6">
              Check Plans
            </button>
            <div className="flex">
              <button className="font-dmsans text-sm md:text-sm tracking-[1%] pl-8 flex items-center">
                Get a quotation
                <img src="arro.png" className="h-[10px] w-[10px] ml-2 object-contain" alt="Arrow right" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/background.png')] bg-cover h-full">
            <div className="flex justify-center h-full">
              <img src="girls.png" className="mt-9 w-[70%] hidden lg:flex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
