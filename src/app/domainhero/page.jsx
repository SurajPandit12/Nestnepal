"use client";

import Image from 'next/image';
import Link from 'next/link';

function Domain() {
  const arr = [".com", ".net", ".org", ".org", ".xyz", ".biz"];

  return (
    <div className="container w-[80%] h-[70%] w-6/6">
      
      <div className="bg-[url('/backgrounds.png')] bg-cover flex items-center justify-center rounded-md relative h-[500px]">
       
        <div className="xl:w-2/5 mx-auto my-8 absolute  left-[8%]">
          <h1 className="font-montserrat font-bold text-4xl text-white mb-4">
            Find the Perfect Domain for Your Business
          </h1>
          <p className="font-dmsans text-sm text-white">
            Kickstart your online journey with Nepal's No.1 Domain Registrar. Register your domain at the best prices and pair it with our top-rated web hosting plans to create a professional online presence.
          </p>
        </div>
       
        <Image
          className="absolute bottom-0 right-[5%] hidden xl:flex"
          src="/laptopgirl.png"
          height={525}
          width={521}
          alt="laptopgirl"
        />
      </div>

   
      <div>
        <div className="bg-white md:px-6 py-6 rounded-lg shadow-lg md:w-5/6 mx-auto relative top-[-80px]">
          <div className="flex flex-wrap px-4 py-2 sm:mx-6 mt-4">
            <div className="sm:px-8 rounded-lg py-2 flex justify-between border w-full sm:w-5/6 font-dmsans outline-none">
              <input
                type="text"
                placeholder="Enter Your Name Here..."
                className="outline-none"
              />
              <select className="text-xl font-medium font-dmsans outline-none">
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".xyz">.xyz</option>
                <option value=".xyz">.biz</option>
              </select>
            </div>
            <button className="lg:ml-4 px-10 py-2 bg-black font-dmsans text-white">
              Search
            </button>
          </div>
          <div className="flex justify-center flex-wrap font-dmsans font-semibold text-[#393939] text-xl gap-7 mt-3">
            {arr.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-[1.5px] rounded-lg border-black py-2 text-center"
              >
                <p className="px-7 font-semibold">{data}</p>
                <span className="text-xs  line-through font-light">Rs.1999</span>
                <span className="font-bold text-sm">Rs.1499</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center font-dmsans text-sm">
            <div className='px-2 '>
            <Image src="/globe.png" width={24.07} height={24} alt="globe"/>
            </div>
            <p className='font-medium'>
              Already have a Domain?{" "}
              <span className="font-bold underline">
                <Link href="#">Transfer it</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domain;
