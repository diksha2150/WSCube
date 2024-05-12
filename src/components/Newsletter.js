import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between py-[50px]">
        <div className="">
          <h1 className=" text-[20px] md:text-[40px] font-bold text-white ">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white">
            Sign up to our newsletterand stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 mr-2 mb-2 text-start rounded sm:w-full"
          />
          <button className="bg-black text-white p-3 rounded">
            Get started
          </button>
          <br />
          <p className="text-white">
            We care bout the protection of your data.
            <br />
            <a href="" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
