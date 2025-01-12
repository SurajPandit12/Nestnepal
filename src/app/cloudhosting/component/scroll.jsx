"use client"
import { useState } from 'react';

function Scroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arr = [
    { data: "Building our website with <span class='text-blue-600'>Nest Nepal cPanel</span>, was user-friendly and as easy as delivering food to our customers." },
    { data: "Another building of a website with Nest Nepal in the town and as easy as flattering itesm for  our customers." },
    { data: "Yet another building out with Nest Nepal in the wonderful city of the name delivering product and services" }
  ];

  const founder = [
    { found: "Suraj Pandit", name: ["intern of Nest Nepal"] },
    { found: "Nishant Neaupane", name: ["intern of Nepal Nest "] },
    { found: "Santosh Poudel", name: ["intern of NestNepal"] }
  ];

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  }

  return (
    <div className="container mt-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
    
        <div className="flex items-center justify-center">
          <img
            className="object-contain drop-shadow-lg rounded-[7.2px] h-[300px] md:h-[406px] w-[230px] md:w-[308px]"
            src="Mustard.png"
            alt="Product"
          />
        </div>

    
        <div className="flex flex-col justify-center items-start w-full md:w-2/3 md:mx-auto">
          <div>
            <div key={currentIndex}>
              <h1 className="text-[24px] md:text-[36.45px] font-dmsans leading-tight font-medium pb-8"
                  dangerouslySetInnerHTML={{ __html: arr[currentIndex].data }}></h1>
            </div>
            <div className="relative w-full md:w-[666px] h-[1.5px] bg-gradient-to-r from-white via-gray-600 to-white"></div>
          </div>
          <div className="flex justify-between w-full pt-6">
            <div  className="font-dmsans font-medium" key={currentIndex}>
              <h2 className="text-[16px] md:text-[18px] font-bold">{founder[currentIndex].found}</h2>
              <p className="text-[14px] md:text-[18px]">{founder[currentIndex].name[0]}</p>
            </div>
            <div className="flex space-x-4">
              <button onClick={handlePrevious}>
                <img
                  className="h-[32px] md:h-[48px] w-[32px] md:w-[48px] object-contain"
                  src="arrow (2).png"
                  alt="Previous"
                />
              </button>
              <button onClick={handleNext}>
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
