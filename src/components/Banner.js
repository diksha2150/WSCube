import React from "react";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px]smy-[100px] mx-auto text-center font-bold">
        <div className=" text-xl md:text-3xl md:p-[24px]">Learn with us</div>
        <h2 className="text-white text-[30px]  md:text-[60px] md:p-[24px]">
          {" "}
          Grow with us
        </h2>
        <div className=" md:text-[50px] text-[30px] text-white md:p-[24px] ">
          Learn
          <ReactTyped
            className="pl-3"
            strings={[
              "Web Devleopment",
              "Digital Markting ",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop={true}
          />
        </div>
        <button className="bg-black text-white p-3 rounded-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
