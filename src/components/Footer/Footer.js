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
    <footer className="bg-white dark:bg-gray-900 font-roboto shadow-2xl pl-5 sm:pl-0 pr-5 sm:pr-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0  md:pl-10 space-y-3">
            <img className="ml-[-30px] mt-[-30px]" src={Logo} alt="" />
            <h1 className="flex items-center text-[#18477E]"> <span className="mr-2"><GoLocation size={20} /></span> Address</h1>
            <div className="flex items-center text-[#18477E]">
            <p className="mr-2"><AiOutlineMail size={20} /></p>
                <a href="mailto:info@siliconbridgetechnologies.com" className="font-semibold text-base">info@siliconbridgetechnologies.com</a>
            </div>
            <div className="flex items-center  font-semibold text-base text-[#18477E]">
            <p className="mr-2"><FaMobileAlt size={20}/></p>
            <a href="tel:1234567890" className="font-semibold text-base">1234567890</a>
            </div>
            {/* <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-[100px] sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get to Know Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/about-us" className="hover:underline">
                    About
                  </Link>
                </li>
                {/* <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Industries
                  </Link>
                </li> */}
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Technology
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                  <li className="mb-4">
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                  <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect with Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'"
                    className="hover:underline  flex   "
                  >
                    {" "}
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1877F2] flex items-center justify-center">
                      <FaFacebookF size={20} color="#1877F2" />
                    </span>{" "}
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'"
                    className="hover:underline  flex   "
                  >
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1877F2] flex items-center justify-center">
                      <AiOutlineTwitter size={20} color="#1C96E8" />
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'"
                    className="hover:underline  flex      "
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'" className="hover:underline">
                    Sitemap
                  </a>
                </li>
                <li className="mb-4">
                  <a href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'" className="hover:underline">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}
            <a href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'" className="hover:underline ml-2">
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
