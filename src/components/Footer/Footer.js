import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import {FaMobileAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import Logo from "../Image/logo.jpg"
import { Link } from "react-router-dom";


const Footer = () => {
  const date =new Date()
  const year = date.getFullYear()
  return (
    <footer class="bg-white dark:bg-gray-900 font-roboto pl-10 pr-10">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0  md:pl-10 space-y-3">
            <img className="ml-[-30px] mt-[-30px]" src={Logo} alt="" />
            <h1 className="flex items-center text-[#18477E]"> <span className="mr-2"><GoLocation size={20} /></span> Address</h1>
            <div className="flex items-center text-[#18477E]">
            <p className="mr-2"><AiOutlineMail size={20} /></p>
                <p className="font-semibold text-base">info@siliconbridgetechnologies.com</p>
            </div>
            <div className="flex items-center  font-semibold text-base text-[#18477E]">
            <p className="mr-2"><FaMobileAlt size={20}/></p>
            <p className="font-semibold text-base">1234567890</p>
            </div>
            {/* <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a> */}
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-[100px] sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get to Know Us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="/about-us" class="hover:underline">
                    About
                  </Link>
                </li>
                {/* <li class="mb-4">
                  <Link to="" class="hover:underline">
                    Industries
                  </Link>
                </li> */}
                <li class="mb-4">
                  <Link to="" class="hover:underline">
                    Technology
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/services" class="hover:underline">
                    Services
                  </Link>
                </li>
                  <li class="mb-4">
                  <Link to="/careers" class="hover:underline">
                    Careers
                  </Link>
                </li>
                  <li class="mb-4">
                  <Link to="/contact" class="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect with Us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="#"
                    class="hover:underline  flex   "
                  >
                    {" "}
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1877F2] flex items-center justify-center">
                      <FaFacebookF size={20} color="#1877F2" />
                    </span>{" "}
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="hover:underline  flex   "
                  >
                    {" "}
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1877F2] flex items-center justify-center">
                      <AiOutlineTwitter size={20} color="#1C96E8" />
                    </span>{" "}
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:underline  flex      "
                  >
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1877F2] flex items-center justify-center">
                      <BiLogoLinkedin size={20} color="#0A66C2" />
                    </span>{" "}
                    Linkdin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Sitemap
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="flex items-center justify-center ">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}
            <a href="#" class="hover:underline ml-2">
              Siliconbridgetechnologies
            </a>
            . All Rights Reserved.
          </span>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
