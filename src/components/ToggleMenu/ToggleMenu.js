import React from 'react'
import Logo from "../Image/logo.jpg"


const ToggleMenu = () => {
  return (
    <div className='absolute top-[120px] left-0 right-0 bg-white w-full h-full flex flex-col'>
         <div className="">
          <img  src={Logo} className="rounded w-[200px]" alt="" />
        </div>
        <div className="flex flex-col">
          <ul className="menu menu-vertical  px-1 w-full">
            <li>
              <a className="text-black">About Us</a>
            </li>
            <li tabIndex={0} className="">
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
            </li>
            <li tabIndex={0} className="">
              <details>
                <summary className="text-black">Technology</summary>
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
              <a className="text-black">Services</a>
            </li>
            <li>
              <a className="text-black">Careers</a>
            </li>
            <li>
              <a className="text-black">Contact Us</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default ToggleMenu