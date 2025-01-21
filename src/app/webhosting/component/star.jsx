import React from "react";

const Rating = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row border-y-2 border-[#E3E3E3] mt-12">
        <div className="flex justify-center  items-center  px-4 lg:px-8 py-4 lg:py-0">
          <p className="font-dmsans font-[400] text-xl leading-[28px] text-[#242424] max-w-[200px]  text-center sm:text-start    ">
            Trusted and Recommended Over
          </p>
        </div>

        <div className="hidden lg:block border-x-2 border-black h-auto my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-[66px] px-4 lg:pl-8 py-4 overflow-y-auto w-full snap-start scrollbar-hide">
          {["trust", "GOOGLE", "advice", "facebook"].map((src, index) => (
            <div key={index} className="text-center">
              <img
                className="h-[37.33px] w-[161.11px] object-contain mb-[8px] mx-auto"
                src={`/${src}.png`}
                alt={`${src} logo`}
              />
              <div className="flex justify-center h-[35.07px] w-full gap-1 mb-[8px]">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/star.png"
                    className="h-full w-auto"
                    alt="star"
                  />
                ))}
              </div>
              <p className="font-poppins font-[400] text-[13.13px] leading-[16.8px] text-[#191919] pb-[8px]">
                TrustScore <span className="font-[700]">4.9 10,461</span>{" "}
                reviews
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;