import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Form = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    name:"",
    company:"",
    email:"",
    country:"",
    phone:""
  });

  let name, value;
  const handleForm = (event) => {
    name = event.target.name;
    value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "info@siliconbridgetechnologies.com",
      Password: "4DD9328E932FBF8406FA55E1F44B1351D532",
      Port: 2525,
      To: `${formData.email}`,
      From:"info@siliconbridgetechnologies.com",
      Subject: `${formData.name}`,
      Body: `<div className="bg-[#04789D]">
      <h1 className="font-bold text-base text-[#04789D]">${formData.name}</h1> <br>
      <div className="flex items-center justify-center"><p className=""font-normal text-sm>Name</p> : <p className="ml-1 font-medium text-sm text-[#04789D]">${formData.email}</p></div> <br>
      <div className="flex items-center justify-center"><p className=""font-normal text-sm>Company</p> : <p className="ml-1 font-medium text-sm text-[#04789D]">${formData.company}</p></div> 
      <div className="flex items-center justify-center"><p className=""font-normal text-sm>Phone</p> : <p className="ml-1 font-medium text-sm text-[#04789D]">${formData.phone}</p></div> 
      <div className="flex items-center justify-center"><p className=""font-normal text-sm>Country</p> : <p className="ml-1 font-medium text-sm text-[#04789D]">${formData.country}</p></div> 
     
     
      </div>
      `
    }).then(
      message =>{
        if(message == "OK"){
          alert("message has been send, thank you for connecting")
        }else{
          alert("there is some error")
        }
      }
    );
    // const config = {
    //   SecureToken: "b016d683-6c0c-4bae-b442-711f49e03188",
    //   To: "nimishkumar9534@gmail.com",
    //   From: "info@siliconbridgetechnologies.com",
    //   Subject: "information",
    //   Body: "hello",
    // };
    // if (window.Email) {
    //   window.Email.send(config).then((res) => console.log(res));
    // }
  };

  return (
    <>
      <div className="w-10/12 sm:w-6/12 lg:w-4/12 bg-white p-3 relative rounded">
        <div
          className="absolute right-[-30px] cursor-pointer top-[-10px] border rounded-full border-white bg-white p-1"
          onClick={() => setToggle(false)}
        >
          <AiOutlineClose size={32} color="black" />
        </div>
        <h1 className="font-medium text-base">
          Thank you for your interest in learning more about our expertise. To
          download the selected document, please complete the form below.
        </h1>
        <div className=" bg-white flex items-center justify-center p-3  ">
          <form className="w-full" onSubmit={onHandleSubmit}>
            <div className="mb-1">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name"
                required
                name="name"
                value={formData.name}
                onChange={handleForm}
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="Company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company
              </label>
              <input
                type="text"
                id="Company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="company"
                value={formData.company}
                onChange={handleForm}
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="Company Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Email
              </label>
              <input
                type="email"
                id="Company Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="email"
                value={formData.email}
                onChange={handleForm}
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="Phone/Mobile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone/Mobile
              </label>
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="phone"
                value={formData.phone}
                onChange={handleForm}
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="Country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="Country"
                id="Country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="country"
                value={formData.country}
                onChange={handleForm}
              />
            </div>

            <button
              type="submit"
              className="text-white capitalize font-medium text-base w-full mt-5 bg-red pt-2 pb-2 rounded "
              onClick={handleForm}
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
