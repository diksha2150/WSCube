import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false); // Corrected initialization

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[15px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">WSCube Tech</div>
        {toggle ? (
          <IoCloseSharp
            onClick={() => setToggle(!toggle)} // Corrected onClick spelling
            className="text-white text-xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company </li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li> {/* Corrected spelling of "Contact" */}
        </ul>
        <ul
          className={`md:hidden w-full h-screen  block text-white fixed  top-[92px] bg-black   ${
            toggle ? `left-[0]` : `left-[-100%]`
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company </li>
          <li className="p-5">Resource</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>{" "}
          {/* Corrected spelling of "Contact" */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
