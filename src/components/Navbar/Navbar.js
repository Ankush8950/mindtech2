import React from "react";

const Navbar = () => {
  return (
      <div className="navbar bg-black pl-10 pr-10 font-roboto">
        <div className="navbar-start">
          <img src="https://www.mindteck.com/assets/images/logo.jpg" alt="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white hover:text-white">About Us</a>
            </li>
            <li tabIndex={0} className="">
              <details>
                <summary className="text-white hover:text-white">Industries</summary>
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
              <a className="text-white hover:text-white">Technology</a>
            </li>
            <li>
              <a className="text-white hover:text-white">Services</a>
            </li>
            <li>
              <a className="text-white hover:text-white">Careers</a>
            </li>
            <li>
              <a className="text-white hover:text-white">Contact Us</a>
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
