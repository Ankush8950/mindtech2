import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import {FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import Logo from "../Image/logo.jpg";
import { Link } from "react-router-dom";


const Footer = () => {
  const date =new Date()
  const year = date.getFullYear()
  return (
    <footer className="bg-white dark:bg-gray-900 font-roboto shadow-2xl pl-5 sm:pl-0 pr-5 sm:pr-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-wrap justify-between pr-10">
          <div className="mb-6 md:mb-0  md:pl-10 space-y-3 w-[400px]">
            <img className="ml-[-30px] mt-[-30px]" src={Logo} alt="" />
            <h1 className="flex  text-[#18477E] sm:w-[400px]"> <span className="mr-2"><GoLocation size={20} /></span> silicon bridge technologies , 2nd floor , 4th cross , 7th main , NKR Park, Hosur road , muniyappa layout, Garvebhavipalya, bengaluru , karnataka, 560068</h1>
            <div className="flex items-center text-[#18477E]">
            <p className="mr-2"><AiOutlineMail size={20} /></p>
                <a href="mailto:info@siliconbridgetechnologies.com" className="font-semibold text-base">info@siliconbridgetechnologies.com</a>
            </div>
            <div className="flex items-center  font-semibold text-base text-[#18477E]">
            <p className="mr-2"><FaMobileAlt size={20}/></p>
            <a href="tel:1234567890" className="font-semibold text-base">1234567890</a>
            </div>
          </div>
            <div className="sm:w-[300px] md:w-[300px] sm:pl-10 m-3">
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
                {/* <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Technology
                  </Link>
                </li> */}
                <li className="mb-4">
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                  {/* <li className="mb-4">
                  <Link to="/app-development" className="hover:underline">
                    Careers
                  </Link>
                </li> */}
                  <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:w-[300px] md:w-[300px] m-3 sm:pl-10 ">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect with Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61550098212258'"
                    className="hover:underline  flex"
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
                    href="https://www.instagram.com/siliconbridge75/?__coig_restricted=1"
                    className="hover:underline  flex   "
                  >
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#D74065] flex items-center justify-center">
                      <AiOutlineInstagram size={20} color="#D74065" />
                    </span>
                    Instagram
                  </a>
                </li>
                {/* <li className="mb-4">
                  <a
                    href="href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'"
                    className="hover:underline  flex   "
                  >
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#1C96E8] flex items-center justify-center">
                      <AiOutlineTwitter size={20} color="#1C96E8" />
                    </span>
                    Twitter
                  </a>
                </li> */}
                <li>
                  <a
                    href = "https://www.linkedin.com/feed/?trk=onboarding-landing"
                    className="hover:underline  flex"
                  >
                    <span className="w-8 h-8 mr-3 rounded-full bg-white border border-[#0A66C2] flex items-center justify-center">
                      <BiLogoLinkedin size={20} color="#0A66C2" />
                    </span>{" "}
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
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
            </div> */}
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
