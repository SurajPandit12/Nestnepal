"use client";

function Page() {
    const data = [
        {
            title: "Starter",
            price: "390",
            term: "With a 3-yr term (70% savings)",
            today: "₹ 4,283.00",
            renew: "₹ 199/mo (₹ 7,164.00 total)",
            arr: ["London", "2 GB", "Unlimited", "Unmetered", "Unmetered", "Unmetered", "1", "Free/Paid", "2", "✔", "✔", "2 Cores", "✔"],
        },
        {
            title: "Powerful",
            price: "390",
            term: "With a 3-yr term (70% savings)",
            today: "₹ 7,884.00",
            renew: "₹ 449/mo (₹ 16,164.00 total)",
            arr: ["London", "2 GB", "Unlimited", "Unmetered", "Unmetered", "Unmetered", "5", "Free/Paid", "4", "✔", "✔", "4 Cores", "✔"],
        },
        {
            title: "Extreme",
            price: "390",
            term: "With a 3-yr term (70% savings)",
            today: "₹ 10,704.00",
            renew: "₹ 599/mo (₹ 21,564.00 total)",
            arr: ["London", "2 GB", "Unlimited", "Unmetered", "Unmetered", "Unmetered", "25", "Free/Paid", "8", "✔", "✔", "4 Cores", "✔"],
        },
        {
            title: "Ultimate",
            price: "390",
            term: "With a 3-yr term (70% savings)",
            today: "₹ 11,464.00",
            renew: "₹ 999/mo (₹ 23,964.00 total)",
            arr: ["London", "2 GB", "Unlimited", "Unmetered", "Unmetered", "Unmetered", "Unlimited", "Free/Paid", "16", "✔", "✔", "4 Cores", "✔"],
        },
    ];

    const features = [
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
    ];

    return (
        <div className="p-6 container">
            <h1 className="text-[36px] font-montserrat font-bold mb-6 text-center">
                Detailed tech specs for all your plans!
            </h1>
            <div className="overflow-auto">
                <table className="w-full border border-gray-400 text-sm">
                    <thead>
                        <tr>
                            <td className="border-x-2 p-4 text-left"></td>
                            {data.map((plan, index) => (
                                <td
                                    key={index}
                                    className="border-x-2 p-8 text-left min-w-[250px]"
                                >
                                    <div className="tracking-[1%] text-[18px] font-semibold font-dmsans mb-[25px] mt-[58px]">
                                        {plan.title}
                                    </div>
                                    <div className="text-[38.88px] font-dmsans font-extrabold">
                                        <span className="text-sm font-dmsans font-bold">RS.</span>
                                        {plan.price}
                                        <span className="text-sm font-dmsans font-bold">/mo</span>
                                    </div>
                                    <span className="bg-[#FDD5FF] p-1 my-2 mt-[12px] mb-5 text-sm">
                                        {plan.term}
                                    </span>
                                    <div className="text-[11px] font-dmsans font-medium mt-2">
                                        You pay {plan.today} today
                                    </div>
                                    <div className="text-[11px] font-dmsans font-medium mt-1">
                                        Renews {plan.renew}
                                    </div>
                                    <div className="mt-8 border border-black text-center hover:bg-black shadow-md duration-300 ease-in-out transition-all hover:text-white hover:scale-110">
                                        <button className="px-4 py-2 font-dmsans rounded">Buy Now</button>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="whitespace-nowrap">
                                <td className="border-x-2 p-4 font-dmsans text-sm text-right font-bold">
                                    {feature}
                                </td>
                                {data.map((plan, planIndex) => (
                                    <td
                                        key={planIndex}
                                        className="border-x-2 p-4 text-xs font-dmsans text-center"
                                    >
                                        {plan.arr[featureIndex]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page;
