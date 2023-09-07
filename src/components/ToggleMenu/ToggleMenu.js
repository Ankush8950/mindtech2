import React from "react";
import Logo from "../Image/logo.jpg";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const ToggleMenu = ({ setToggleMenu }) => {
  return (
    <div className="absolute top-[40px] z-20 left-0 right-0 bg-white w-full h-full flex flex-col pt-5">
      <div
        className="absolute right-2 top-7"
        onClick={() => setToggleMenu(false)}
      >
        <AiOutlineClose size={35} />
      </div>

      <div className="">
        <img src={Logo} className="rounded w-[200px]" alt="" />
      </div>
      <div className="flex flex-col">
        <ul className="menu menu-vertical  px-1 w-full">
          <li onClick={() => setToggleMenu(false)}>
            <Link to="/about-us" className="text-black">
              About Us
            </Link>
          </li>
          {/* <li tabIndex={0} className="">
              <details>
                <summary className="text-black">Industries</summary>
                <ul className="p-2 w-[200px]">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          <li tabIndex={0} className="">
            <details>
              <summary className="text-black">Technology</summary>
              <ul className="p-2 w-[200px]">
                <li onClick={() => setToggleMenu(false)}>
                  <Link to="/internet-of-things">Internet of Things</Link>
                </li>
              </ul>
            </details>
          </li>

          <li onClick={() => setToggleMenu(false)}>
            <Link to="/services" className="text-black">
              Services
            </Link>
          </li>

          {/* <li onClick={()=>setToggleMenu(false)}>
              <Link to="/careers" className="text-black">Careers</Link>
            </li> */}
          <li onClick={() => setToggleMenu(false)}>
            <Link to="/contact" className="text-black">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;
