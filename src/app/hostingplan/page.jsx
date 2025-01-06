"use client";
import { useState } from "react";

function Page() {
  const [selectedOption, setSelectedOption] = useState("Annual");
  const data = [
    {
      title: "Starter",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      price: "Rs390/mo",
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
      price: "Rs390/mo",
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
        "Free .COM/.NET.ORG Domain",
      ],
    },
    {
      title: "Extreme",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      price: "Rs390/mo",
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
        "Free .COM/.NET.ORG Domain",
        "Free .COM/.NET.ORG (Rs. 4999.00/yr value) - 1 year",
      ],
    },
    {
      title: "Ultimate",
      description:
        "Empower Your Business with Cloud Hosting. Lorem Ipsum dipsum sitsum.",
      price: "Rs390/mo",
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
        "Free .COM/.NET.ORG Domain",
        "Free SSL",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold">
          Choose Your <span className="text-[#1818B3]">Reseller Hosting</span> Plan
        </h1>
        <p className="text-gray-600">
          Tailored Plans to Elevate and Empower Every Aspect of Your Online
          Presence
        </p>
      </div>

      <div className="flex justify-center py-4">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          {/* Annual Term Button */}
          <button
            className={`p-4 text-sm font-semibold flex flex-col rounded-full items-center ${
              selectedOption === "Annual"
                ? "bg-black text-white"
                : "bg-white text-black"
            } rounded-l-full`}
            onClick={() => setSelectedOption("Annual")}
          >
            <span>Annual Term</span>
            <p
              className={`text-xs ${
                selectedOption === "Annual"
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              A balanced choice for steady progress.
            </p>
          </button>

          {/* Tri-Annual Term Button */}
          <button
            className={`p-4 text-sm font-semibold flex flex-col rounded-full items-center ${
              selectedOption === "Tri-annually"
                ? "bg-black text-white"
                : "bg-white text-black"
            } rounded-r-full`}
            onClick={() => setSelectedOption("Tri-annually")}
          >
            <span>Tri-annually</span>
            <p
              className={`text-xs ${
                selectedOption === "Tri-annually"
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              Great for long-term value and growth.
            </p>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-6">
        {data.map((maindata, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg border-2 p-4 shadow-sm"
          >
            <h1 className="text-lg font-bold text-gray-800 mb-2">
              {maindata.title}
            </h1>
            <p className="text-sm text-gray-600 mb-2">{maindata.description}</p>
            <h2 className="text-xl font-bold text-gray-800 py-4">
              {selectedOption === "Annual" ? "Rs200/mo" : "Rs390/mo"}
            </h2>
            <button className="w-full py-2 border-2 border-black text-center font-semibold text-lg hover:shadow-lg hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
              Buy Now
            </button>
            <p className="text-sm bg-[#BBFFAA] text-black mt-3 p-2">
              {maindata.term}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You pay <strong>{maindata.upfront}</strong> today
            </p>
            <p className="text-sm text-gray-600">
              Renews January 2026 at <strong>{maindata.renewal}</strong>
            </p>
            <ul className="text-sm text-gray-800 mt-4 p-6">
              {maindata.features.map((feature, i) => (
                <li className="p-2" key={i}>
                  <span className="text-green-500 mr-2">✅</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
