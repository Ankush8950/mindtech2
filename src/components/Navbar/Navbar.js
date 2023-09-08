import React, { useState } from "react";
import Logo from "../Image/logo.jpg";
import { RiMenuFill } from "react-icons/ri";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import {IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
  const [ToggleMenus, setToggleMenu] = useState(false);
  
  return (
    <div className="navbar shadow bg-white pl-5 sm:pl-10 pr-5 sm:pr-10 font-roboto w-full flex items-center justify-between">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} className="rounded w-[200px]" alt="" />
      </Link>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-full">
         <li>
            <NavLink to="/" className="text-[#04789D] hover:text-[#04789D]">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="text-[#04789D] hover:text-[#04789D]">About Us</NavLink>
          </li>
            {/* <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-[#04789D] hover:text-[#04789D]"
              >
                Industries
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li className="">
                  <a>Item 2</a>
                </li>
              </ul>
            </li> */}
             <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                 className = "text-[#04789D] hover:text-[#04789D]" >
                   Technology <IoIosArrowDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52"
              >
                <li className="text-[#04789D]">
                  <Link to='/internet-of-things'>Internet of Things</Link>
                </li>
                {/* <li>
                  <Link to=''>Item 2</Link>
                </li> */}
              </ul>
            </li>
            {/* <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                 className = "text-[#04789D] hover:text-[#04789D]" >
                   Services <IoIosArrowDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52"
              >
              <div>
                <div >
                <h1 className="border-b pb-3 pl-4 font-medium text-base text-[#04789D]">Development</h1>
                    <div className="mt-2">
                      <li className="text-[#04789D]">
                  <Link to='/app-development'>Qa Automation</Link>
                </li>
                {/* <li>
                  <Link to=''>Item 2</Link>
                </li> */}
                    {/* </div>
                </div>
              </div>
              </ul>
            {/* </li> */} 
            <li>
            <NavLink to="/services" className="text-[#04789D] hover:text-[#04789D]">Service</NavLink>
          </li>
         
          <li>
            <NavLink to="/careers" className="text-[#04789D] hover:text-[#04789D]">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-[#04789D] hover:text-[#04789D]">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div
        className="flex  lg:hidden"
        onClick={() => setToggleMenu(!ToggleMenus)}
      >
        {ToggleMenus ? <AiOutlineClose size={40} /> : <RiMenuFill size={40} />}
      </div>
      {ToggleMenus ? <ToggleMenu setToggleMenu={setToggleMenu} /> : ""}
    </div>
  );
};

export default Navbar;
