import React, { useState } from "react";
import ContactHead from "../Image/freshhh.png";
// import conatctImg from "../Image/conatct.png";
import { HiLocationMarker } from 'react-icons/hi';
import {MdEmail} from "react-icons/md"
import {BiPhoneCall} from "react-icons/bi"

import "./Contact.css";

const Contact = () => {
  const [data,setData] = useState({
    name: "",
    email:"",
    subject:"",
    message:""
  })
console.log(data);
  const onHandleChange = (e) =>{
    const formData = {...data}
    formData[e.target.name] = e.target.value
    setData(formData)
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data);
  }


  return (
    <div className="pt-5 pb-10 font-roboto">
      <div className="w-full h-full overflow-hidden	 relative flex items-center justify-center ">
        <img className="w-full h-full md:mt-[-100px]" src={ContactHead} alt="" />
        <div className="absolute flex items-center justify-center z-10">
          <h1 className="text-center font-bold md:text-4xl text-[#04789D] ">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  justify-center pt-10 pb-10 pl-5 md:pl-10 pr-5 md:pr-10">
        <div className="w-full flex flex-col pl-5 sm:pl-10  md:pl-0 md:w-3/6">
          {/* <img src={conatctImg} alt="" /> */}
            <h1 className="font-bold text-4xl text-[#04789D]">Get In Touch</h1>
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl pt-2">Reach Us</h1>
            <div className="flex  pt-3">
            <HiLocationMarker size={20} color="#04789D"/>
              <p className="font-normal text-base capitalize ml-2 w-[350px]">silicon bridge technologies , 2nd floor , 4th cross , 7th main , NKR Park, Hosur road , muniyappa layout, Garvebhavipalya, bengaluru , karnataka, 560068</p>
            </div>
            <div className="flex pt-2">
              <MdEmail size={20} color="#04789D" />
              <p className="font-normal text-base capitalize ml-2">info@siliconbridgetechnologies.com</p>
            </div>
            <div className="flex pt-2 ">
              <BiPhoneCall size={20} color="#04789D" />
              <p className="font-normal text-base capitalize ml-2">123456789</p>
            </div>
             {/* <div className="flex pt-2 ">
              <BiPhoneCall size={20} color="#04789D" />
              <p className="font-normal text-base capitalize ml-2">123456789</p>
            </div> */}

          </div>
        </div>
        <div className="w-full md:w-5/6 flex items-center justify-center shadow-2xl p-5">
          <form className="w-full " onSubmit={handleSubmit}>
          <div class="mb-3">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                id="email"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name"
                value={data.name}
                onChange={onHandleChange}
                required

              />
            </div>
            <div className="mb-3">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                value={data.email}
                onChange={onHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.subject}
                onChange={onHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                placeholder="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.message}
                onChange={onHandleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="text-black capitalize  bg-[#04789D]  pl-7 pr-7 pt-2 pb-2 rounded text-white font-normal text-base"
            >
              send message
            </button>
          </form>
        </div>
      </div>
      <div className="pl-5 md:pl-10 pr-5 md:pr-10">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="fvd"
              className="gmap_iframe h-[300px] md:h-[400px]"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=benguluru&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
