import React from "react";

const Navbar = () => {
  return (
      <div className="navbar bg-[#dadada] pl-10 pr-10 font-roboto">
        <div className="navbar-start">
          <img src="./logo.jpg" className="rounded" alt="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-[#04789D] hover:text-[#04789D]">About Us</a>
            </li>
            <li tabIndex={0} className="">
              <details>
                <summary className="text-[#04789D] hover:text-[#04789D]">Industries</summary>
                <ul className="p-2 w-[200px]">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-[#04789D] hover:text-[#04789D]">Technology</a>
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
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
  );
};

export default Navbar;
