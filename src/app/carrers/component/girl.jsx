import React from 'react';
import Image from 'next/image';

function Girl() {
  const stats = [
    { icon: '/sh1.png', value: '5 +', description: 'Years Experience' },
    { icon: '/sh2.png', value: '5000 +', description: 'Years Experience' },
    { icon: '/sh3.png', value: '50 +', description: 'Years Experience' },
    { icon: '/sh4.png', value: '17 +', description: 'Years Experience' },
  ];

  return (
    <div className="container mx-auto relative">
      <div className="lg:flex items-center justify-between my-32 ">
   
        <div className=" xl:flex hidden lg:w-1/2">
          <Image
            height={503}
            width={755}
            src="/girll.png"
            alt="drive"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md lg:w-1/2 w-full lg:absolute left-[32.5%] -top-32 mt-9">
          <div className="flex justify-start">
          <span className="px-4 py-2 bg-[#1565D8] bg-opacity-10 text-[#1818B3] font-medium rounded-full text-sm">
             COME JOIN US
            </span>
          </div>

          <h2 className="text-4xl font-semibold font-poppins text-[#183B56] mt-4">Why Work Here?</h2>
          <p className="mt-2 text-[#5A7184] text-lg font-opensans">
            From year to year we strive to invent the most innovative technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4  rounded-lg"
              >
              
                <div className="flex-shrink-0">
                  <Image
                    height={60}
                    width={60}
                    src={stat.icon}
                    alt="icon"
                    className=""
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="leading-[41px] text-[#5A7184] text-lg font-dmsans">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Girl;
