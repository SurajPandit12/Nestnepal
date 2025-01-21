"use client"
import { useState } from "react";
function features() {
const [select, setSelect] = useState("Annual");
    

const data = [
    {
      title: "Starter",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      term: "With a 3-yr term (50% savings)",
      upfront: "₹ 10,764.00",
      renewal: "₹ 599.00",
      features: [
        "Boosted Performance",
        "Unlimited nvme-SSD Storage",
        "Anycast Nameservers",
        "Unlimited E-mail Accounts",
        "Unlimited Bandwidth",
        "Unlimited MySQL Databases",
      ],
    },
    {
      title: "Powerful",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      term: "With a 3-yr term (50% savings)",
      upfront: "₹ 10,764.00",
      renewal: "₹ 599.00",
      features: [
        "Boosted Performance",
        "Unlimited nvme-SSD Storage",
        "Anycast Nameservers",
        "Unlimited E-mail Accounts",
        "Unlimited Bandwidth",
        "Unlimited MySQL Databases",
       
      ],
      extra: [{

       feat: "Free .COM/.NET.ORG Domain",
       bg:"bg-[#FDD5FF]"
      }]
    },
    {
      title: "Extreme",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      term: "With a 3-yr term (50% savings)",
      upfront: "₹ 10,764.00",
      renewal: "₹ 599.00",
      features: [
        <span className="font-bold">Boosted</span> + " Performance",
        "Unlimited nvme-SSD Storage",
        "Anycast Nameservers",
        "Unlimited E-mail Accounts",
        "Unlimited Bandwidth",
        "Unlimited MySQL Databases",
      ],
      extra: [
        {feat:"Free .COM/.NET.ORG Domain",
        },
        {greet:"Free .COM/.NET.ORG Domain,(Rs. 4999.00/yr value) - 1 year",
          bg:"bg-[#FDD5FF]"
        }
      ]
    },
    {
      title: "Ultimate",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      term: "With a 3-yr term (50% savings)",
      upfront: "₹ 10,764.00",
      renewal: "₹ 599.00",
      features: [
        "Boosted Performance",
        "Unlimited nvme-SSD Storage",
        "Anycast Nameservers",
        "Unlimited E-mail Accounts",
        "Unlimited Bandwidth",
        "Unlimited MySQL Databases",
        
      ],
      extra: [
        {feat:"Free .COM/.NET.ORG Domain",
         
        },
        {greet:"Free SSL",},
        {feat:"Free .COM/.NET.ORG Domain",
           bg:"bg-[#FDD5FF]"
        }
      ],
    },
  ];

  return (
    <div className="container">
        <div className="text-center container my-10 ">
            <h1 className=" text-3xl pb-2 font-montserrat text-[40px] font-bold">
            Choose Your <span className="text-[#B25DB7]">Visual Studio
            </span> Plan
            </h1>
            <p className="text-lg  text-[#393939] font-poppins ">Tailored Plans to Elevate and Empower Every Aspect of Your Online Presence</p>

        </div>
       <div className="flex justify-center mt-5 font-dmsans">
        <div className="flex rounded-full font-dmsans border-[1px] px-1 py-1 ">
        <button
            className={`p-4  px-12 text-sm font-semibold text-center rounded-full  ${
              select === "Annual"
                ? "bg-black text-white"
                : "bg-white text-black"
            } rounded-l-full`}
            onClick={() => setSelect("Annual")}
          >
            <span className=" text-lg font-dmsans">Annual Term</span>
            <p
              className={`hidden md:flex text-xs ${
                select === "Annual"
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              A balanced choice for steady progress.
            </p>
          </button>
          <button
            className={`p-4 px-8 text-sm font-semibold text-center rounded-full ${
              select === "Tri-annually"
                ? "bg-black text-white"
                : "bg-white text-black"
            } rounded-r-full`}
            onClick={() => setSelect("Tri-annually")}
          >
            <span className="text-lg font-dmsans"> Tri-annually</span>
            <p
              className={`hidden md:flex text-xs ${
                select === "Tri-annually"
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              Great for long-term value and growth.
            </p>
          </button>
         </div>
       </div>
<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-6 border  ">
       {data.map((data, index) =>
    (
        <div className=" text-sm pt-12 border pb-6 pl-4 " key={index}>
            <p className="font-semibold pb-4 font-dmsans text-[18px]">{data.title}</p>
            <p className="text-sm pb-6 font-dmsans text-[12.6]">{data.description}</p>
            <span className="font-bold text-sm font-dmsans ">RS</span>
            <span className="font-bold font-dmsans text-3xl text-[38.88px] ">{" "}{select === "Annual" ? "200" : "390"}</span><span className="text-sm font-dmsans">/mo</span>
            <p> </p>

            <div className="my-2">
            <span className="bg-[#FDD5FF] font-dmsans">{data.term}</span>
              </div>
            <p className="text-[11px] font-dmsans text-[#707070]">you pay{data.upfront}today</p>
            <p className="text-[11px] pb-3 font-dmsans">Renews Jan 2026 for{data.renewal}</p>

           <div className=" py-2 border-2  text-center mr-2 hover:shadow-lg hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
           <button className=" font-semibold  font-dmsans  ">
              Buy Now
            </button>
            </div>
            <ul className="text-sm text-gray-800 mt-4 p-6">
              {data.features.map((feature, i) => (
                <li className="p-2" key={i}>
                  <span className="text-green-500 mr-2 font-dmsans text-[12.6px] font-light">&#10004;</span>
                  {feature}
                </li>
                
              ))}
            </ul>
            <div className="border-[1px] mx-12"></div>
            {data.extra &&
  data.extra.map((extra, index) => (
    <div
      className="py-2 px-8 flex items-start  font-dmsans text-[12.6px] tracking-[1%]"
      key={index}
    >
      
      <span className="text-green-500 mr-2 font-dmsans text-[14px] font-light">
        &#10004;
      </span>
    <span className={`${extra.bg} font-dmsans text-gray-800`}>
  {extra.feat || extra.greet}
</span>
    </div>
  ))}
        </div>
    ))}
    </div>
    </div>
  )
}

export default features