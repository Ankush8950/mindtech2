import React from "react";
import {AiOutlineClose} from "react-icons/ai"

const Form = ({setToggle}) => {
  return (
    <>
    <div className="w-10/12 sm:w-6/12 lg:w-4/12 bg-white p-3 relative rounded">
      <div className="absolute right-[-30px] cursor-pointer top-[-10px] border rounded-full border-white bg-white p-1" onClick={()=>setToggle(false)}>
        <AiOutlineClose size={32} color="black"/>
      </div>
      <h1 className="font-medium text-base">Thank you for your interest in learning more about our expertise. To download the selected document, please complete the form below.</h1>
      <div className=" bg-white flex items-center justify-center p-3  ">
        <form className="w-full">
          <div class="mb-1">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="Company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="Company"
              id="Company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="Company Email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Email 
            </label>
            <input
              type="Company email"
              id="Company Email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="Phone/Mobile"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone/Mobile
            </label>
            <input
              type="number"
              id="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="Country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="Country"
              id="Country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            class="text-white capitalize font-medium text-base w-full mt-5 bg-red pt-2 pb-2 rounded "
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Form;
