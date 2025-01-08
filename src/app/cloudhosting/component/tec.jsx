"use client"

function Page() {
    const data = [
      {
        arr: [
          "Free Domain",
          "Dedicated LVE RAM",
          "NVMe SSD Storage",
          "Bandwidth",
          "Monthly Bandwidth",
          "Database",
          "Websites",
          "SSL",
          "Cloud Backups Per Day",
          "Softaculous Installer",
          "Free Website Migration",
          "Dedicated vCPU",
          "Website Cache Optimization",
        ],
      },
      {
        title: "Starter",
        price: "Rs. 390/mo",
        term: "With a 3-yr term (70% savings)",
        today: "₹ 4,283.00",
        renew: "₹ 199/mo (₹ 7,164.00 total)",
        arr: [
          "London",
          "2 GB",
          "Unlimited",
          "Unmetered",
          "Unmetered",
          "Unmetered",
          "1",
          "Free/Paid",
          "2",
          "✔",
          "✔",
          "2 Cores",
          "✔",
        ],
      },
      {
        title: "Powerful",
        price: "Rs. 390/mo",
        term: "With a 3-yr term (70% savings)",
        today: "₹ 7,884.00",
        renew: "₹ 449/mo (₹ 16,164.00 total)",
        arr: [
          "London",
          "2 GB",
          "Unlimited",
          "Unmetered",
          "Unmetered",
          "Unmetered",
          "5",
          "Free/Paid",
          "4",
          "✔",
          "✔",
          "4 Cores",
          "✔",
        ],
      },
      {
        title: "Extreme",
        price: "Rs. 390/mo",
        term: "With a 3-yr term (70% savings)",
        today: "₹ 10,704.00",
        renew: "₹ 599/mo (₹ 21,564.00 total)",
        arr: [
          "London",
          "2 GB",
          "Unlimited",
          "Unmetered",
          "Unmetered",
          "Unmetered",
          "25",
          "Free/Paid",
          "8",
          "✔",
          "✔",
          "4 Cores",
          "✔",
        ],
      },
      {
        title: "Ultimate",
        price: "Rs. 390/mo",
        term: "With a 3-yr term (70% savings)",
        today: "₹ 11,464.00",
        renew: "₹ 999/mo (₹ 23,964.00 total)",
        arr: [
          "London",
          "2 GB",
          "Unlimited",
          "Unmetered",
          "Unmetered",
          "Unmetered",
          "Unlimited",
          "Free/Paid",
          "16",
          "✔",
          "✔",
          "4 Cores",
          "✔",
        ],
      },
    ];
  
    return (
      <div className="p-6 container">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Detailed tech specs for all your plans!
        </h1>
        <div>
          <div className="grid grid-cols-5 overflow-auto">
            {data.map((plan, index) => (
              <div
                key={index}
                className={`border pl-2 pt-5 ${index === 0 ? "pt-56" : ""}`}
              >
                <p className="font-bold text-sm mb-2 py-2">{plan.title}</p>
                <p className="text-3xl font-extrabold">{plan.price}</p>
                <span className="bg-green-600 mb-2">{plan.term}</span>
                <p
                  className={`text-sm mb-2 mt-2 ${
                    index === 0 ? "hidden" : ""
                  }`}
                >
                  You pay {plan.today} today
                </p>
                <p
                  className={`text-sm mb-2 mt-2 ${
                    index === 0 ? "hidden" : ""
                  }`}
                >
                  jan 2026 for {plan.renew}
                </p>
                <div
                  className={`border m-3 border-black flex justify-center items-center text-center ${
                    index === 0 ? "hidden" : ""
                  }`}
                >
                  <button className="px-6 py-2">Buy Now</button>
                </div>
                <ul>
                  {plan.arr.map((feature, i) => (
                    <li key={i} className="py-2 font-medium text-center">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Page;
  