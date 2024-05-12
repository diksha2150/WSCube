import React from "react";
import laptop from "../assests/laptop.jpg";
const Expert = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-2 my-10 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={laptop} alt="logo" className="inline" />
      </div>
      <div className="flex flex-col justify-center col-span-1">
        <h1 className="text-[#00df9a] font-bold my-2"> Learn More Expert</h1>
        <p className="my-2 text-justify">
          This is the version of our website addressed to speakers of English in
          India. If you are a resident of another country or region, please
          select the appropriate version of Tripadvisor for your country or
          region in the drop-down menu. more
        </p>
        <button className="bg-black text-white p-3 rounded-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Expert;
