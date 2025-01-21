import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

function Vacancies() {
  const vacancies = [
    { title: 'Junior Graphic Designer', location: 'Dhobighat, Lalitpur' },
    { title: 'Junior Graphic Designer', location: 'Dhobighat, Lalitpur' },
    { title: 'Junior Graphic Designer', location: 'Dhobighat, Lalitpur' },
  ];

  return (
    <div className="container mx-auto my-10 max-w-screen-lg ">
     
      <div className="text-left md:text-center">
        <h1 className="text-4xl font-bold font-montserrat">Current Vacancies.</h1>
        <p className="font-poppins text-lg text-[#707070] mt-2">
          If You Think You're a Fit, Apply Now! We're Eager to Hear from You.
        </p>
      </div>

    
      <div className="mt-8 space-y-4">
        {vacancies.map((vacancy, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            
            <div className="flex items-center">
             
              <div className="w-12 h-12 bg-blue-50  object-contain flex items-center justify-center rounded-lg">
                <Image
                  src="/bag.png" 
                  alt="icon"
                  width={24}
                  height={24}
                  className='object-contain'
                />
              </div>

              
              <div className="ml-4">
                <h3 className="text-xl font-opensans font-semibold  text-[#1565D8]">{vacancy.title}</h3>
                <p className="text-sm font-opensans font-semibold text-[#5A7184]">{vacancy.location}</p>
              </div>
            </div>

            
            <div>
            <ChevronRight  className='text-[#1565D8] h-5 w-5'/>
               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vacancies;
