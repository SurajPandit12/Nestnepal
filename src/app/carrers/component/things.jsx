import React from 'react'
import Image from 'next/image';
function things() {
    const values = [
       
        {
          title: "Work-life Balance",
          description:
            "Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.",
          icon:'/sheet1.png', 
        },
        {
          title: "Personal Growth",
          description:
            "Transparency, as used in science, is operating in such a way that it is easy for others to see what actions are performed.",
          icon: '/sheet2.png',
        },
        {
          title: "Meaningful Work",
          description:
            "Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.",
          icon: '/sheet3.png',
        },
        {
          title: "Community Engagement",
          description:
            "Trust will help us foster a positive and productive environment that delivers value to our users and customers.",
          icon:'/sheet4.png',
        },
        {
          title: "Innovating Creatively",
          description:
            "Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.",
          icon:'/sheet5.png',
        },
      ];
      
  return (
    <div className='container'>
           <div className="py-12 px-6 ">
      <h2 className="text-5xl font-medium font-montserrat  mb-6 max-w-xl">
        A few things you should know about Us.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-col justify-center ">
        <div></div>
        <h3 className="text-5xl font-montserrat font-bold text-black max-w-72 leading-[48px] mb-2   ">
          Nest Nepal <span className="text-[#1818B3]">Values</span>
        </h3>
        <p className=" text-[#393939]  ">
          At Nest Nepal, we keep it real. We're all about honesty,
          trustworthiness, and personal connections.
        </p>
      </div>
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col   p-6  rounded-lg"
          >
            <div className='flex  items-center  py-5'>
             <Image height={60} width={60} src={value.icon} alt='drive' className=''/>
            </div>
            <h4 className="text-xl font-semibold font-poppins  mb-2">
              {value.title}
            </h4>
            <p className="font-dmsans text-sm text-[#393939]">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default things