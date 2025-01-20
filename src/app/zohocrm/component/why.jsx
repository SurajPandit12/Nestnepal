import React from "react";

const why = () => {
  return (
    <div className="bg-gradient-to-r from-[#E42527] from-60% to-[#FFD5D6] ">
      <div className="grid grid-cols-1 mx-4 pb-6 sm:pb-6 sm:grid-cols-2">
        <div className="flex justify-end">
          <img className="object-contain h-[400px]" src="/asian.png" alt="" />
        </div>
        <div className="pt-[67px] max-w-[540px]">
          <img
            className="h-[25.02px] w-[191px] object-contain "
            src="/public.png"
            alt=""
          />
          <p className="font-montserrat font-[700] text-[52px] leading-[64.95px] pt-[24px] pb-[16px] ">
            Why go with 
            <br />
            <span className="text-[#1818B3]">Nest Nepal</span>?
          </p>
          <p className="font-dmsans font-[400] text-[16.59px] leading-[27px] pb-[21.1px]">
            We believe the best technology is only as effective as the team
            behind it. That's why we provide expert support and so much more.
          </p>
          <button className="bg-[#111111] px-12 py-2 text-white ">
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default why;