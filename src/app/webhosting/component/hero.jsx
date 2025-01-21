import Image from "next/image";

function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 container mt-12">
      {/* Left Section */}
      <div className="grid col-span-7 grid-cols-[55%_45%] bg-gradient-to-br from-[#FFFFFF] via-[#F3F8FC] to-[#F6FBFF]">
        <div className="mx-auto pl-6 pt-8">
          <p className="pb-4 font-poppins font-light text-xl text-[#6A6A6A] leading-7">
            Web Hosting in Nepal
          </p>
          <h1 className="font-bold text-[40px] font-montserrat leading-[50px] pb-4 max-w-lg">
            Soar High and Secure with our Web Hosting
          </h1>
          <ul className="flex flex-col gap-y-3 text-sm font-dmsans list-disc pl-6">
            <li>Free SSL Certificate for Secure and Trusted Connections.</li>
            <li>Lightspeed Network Server for Unmatched Performance.</li>
            <li>Daily Automated Backups for Data Security.</li>
            <li>Effortless Installation of 150+ Apps with One Click.</li>
          </ul>
          <div className="flex my-10 font-dmsans tracking-[1%]">
            <button className="bg-[#1818B3] mx-2 px-6 py-2 text-sm text-white font-medium tracking-wide">
              Check Plans
            </button>
            <button className="px-7 py-3 text-sm flex items-center gap-2">
              Get a quotation
              <img src="/quot.png" alt="WhatsApp Icon" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex object-contain">
          <Image src="/phonegirl.png" width={600} height={605} alt="phone girl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="grid col-span-3 rounded-sm">
        <div className="bg-[#5468FF] text-center text-white mb-6 flex flex-col items-center py-12 gap-2 pb-10 rounded-xl font-poppins text-[16px]">
          <p>3-year purchase required.</p>
          <h2 className="font-bold w-2/3 tracking-wide font-montserrat text-[25px]">
            Available only at Rs. 1,099 /mo
          </h2>
          <button className="text-black bg-white px-3 py-2 text-[17px] font-dmsans rounded-md">
            Host Website
          </button>
        </div>

        <div className="bg-[#EDF8FF] flex items-center justify-between rounded-xl tracking-[1%] text-lg overflow-hidden">
          <p className="font-semibold font-dmsans text-[#000000] max-w-[125px] pl-5">
            Tailored hosting for smooth performance
          </p>
          <img className="h-[184px] w-[197px]" src="lock.png" />
        </div>
      </div>
    </div>
  );
}

export default Page;
