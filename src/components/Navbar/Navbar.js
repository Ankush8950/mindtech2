import React, { useState } from "react";
import Logo from "../Image/logo.jpg";
import { RiMenuFill } from "react-icons/ri";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [ToggleMenus, setToggleMenu] = useState(false);
  return (
    <div className="navbar bg-white pl-10 pr-10 font-roboto w-full flex items-center justify-between">
      <div className="">
        <img src={Logo} className="rounded w-[200px]" alt="" />
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-full">
          <li>
            <a className="text-[#04789D] hover:text-[#04789D]">About Us</a>
          </li>
            <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-[#04789D] hover:text-[#04789D]"
              >
                Industries
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
             <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                 className = "text-[#04789D] hover:text-[#04789D]" >
                   Technology
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Internet of Things</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
         
          <li>
            <a className="text-[#04789D] hover:text-[#04789D]">Services</a>
          </li>
          <li>
            <a className="text-[#04789D] hover:text-[#04789D]">Careers</a>
          </li>
          <li>
            <a className="text-[#04789D] hover:text-[#04789D]">Contact Us</a>
          </li>
        </ul>
      </div>
      <div
        className="flex  lg:hidden"
        onClick={() => setToggleMenu(!ToggleMenus)}
      >
        {ToggleMenus ? <AiOutlineClose size={40} /> : <RiMenuFill size={40} />}
      </div>
      {ToggleMenus ? <ToggleMenu /> : ""}
    </div>
  );
};

export default Navbar;
