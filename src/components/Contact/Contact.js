import React, { useState } from "react";
import ContactHead from "../Image/freshhh.png";
// import conatctImg from "../Image/conatct.png";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log("Hello", data);
  const onHandleChange = (e) => {
    const formData = { ...data };
    formData[e.target.name] = e.target.value;
    setData(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       window.Email.send({
         Host: "smtp.elasticemail.com",
         Username: "ganeshg3566@gmail.com",
         Password: "EF134DB8C0B941C862FB56D49086DEC202A7",
         To: "info@siliconbridgetechnologies.com",
         From: `${data.email}`,
         Subject: "subject",
         Body: `Hello there`
       }).then(
         message => alert(message)
       );
  };

  return (
    <div className="pt-5 pb-10 font-roboto">
      <div className="w-full h-full overflow-hidden	 relative flex items-center justify-center ">
        <img
          className="w-full h-full md:mt-[-100px]"
          src={ContactHead}
          alt=""
        />
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
              <HiLocationMarker size={20} color="#04789D" />
              <p className="font-normal text-base capitalize ml-2 w-[350px]">
                silicon bridge technologies , 2nd floor , 4th cross , 7th main ,
                NKR Park, Hosur road , muniyappa layout, Garvebhavipalya,
                bengaluru , karnataka, 560068
              </p>
            </div>
            <div className="flex pt-2">
              <MdEmail size={20} color="#04789D" />
              <p className="font-normal text-base capitalize ml-2">
                info@siliconbridgetechnologies.com
              </p>
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
                id="name"
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
           <iframe className="h-[300px] md:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31111.890015028297!2d77.60248142249839!3d12.908605025148217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssilicon%20bridge%20technologies%20%2C%202nd%20floor%20%2C%204th%20cross%20%2C%207th%20main%20%2C%20NKR%20Park%2C%20Hosur%20road%20%2C%20muniyappa%20layout%2C%20Garvebhavipalya%2C%20bengaluru%20%2C%20karnataka%2C%20560068!5e0!3m2!1sen!2sin!4v1693759779915!5m2!1sen!2sin" width="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
