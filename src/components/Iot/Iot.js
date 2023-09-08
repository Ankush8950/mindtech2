import React from "react";
import IotImg from "../Image/IoT.jpeg"
import IotImg1 from "../Image/iot2-removebg-preview.png"
import IotData from "./IotCardData";
import IotCart from "./IotCart";


const Iot = () => {
  return (
    <>
    <div className="font-roboto pb-20">

    <div className="w-full h-[350px] flex items-center justify-center opacity-80" style={{backgroundImage: `url(${IotImg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <h1 className="font-bold text-4xl text-white">Internet of Things</h1>
    </div>
      {/* <img src="https://www.mindteck.com/assets/images/IoT_1624784529-1626183944.jpeg" alt="iot"/> */}
      <div className="flex flex-col-reverse md:flex-row pl-5 md:pl-10 pr-5 md:pr-10 pt-10">
      <div className=" md:w-6/12">
        <h1 className="font-bold text-2xl text-[#04789D]">Building The Future - IoT Solutions and Services</h1>
      <div className="pt-5">
        <p className="font-medium text-base">Siliconbridge Technologies IoT services and solutions are designed to provide efficient, cost-effective, secure and customized insights and analysis from real-time data collected via connected devices and products for better decision-making and more productive business operations.</p>
      <p className="font-medium text-base pt-5" >Siliconbridge Technologies offers the highest quality of services amongst all IoT device management companies. Use cases for a variety of clients from the manufacturing, energy and utilities, consumer electronics and security industries, include:</p>
      <div className="pl-7 pt-5">
        <ul className="list-disc">
          <li>smart manufacturing with preventive maintenance,</li>
          <li>asset monitoring and tracking,</li>
          <li>connected vehicles,</li>
          <li>commercial/industrial/agricultural equipment maintenance and optimization,</li>
          <li>smart buildings and homes,</li>
          <li>smart energy management,</li>
          <li>wearables and remote diagnostics for patient monitoring and medical equipment.</li>
        </ul>
      </div>
      </div>
      </div>
      <div className="md:w-6/12 md:h-4/6">
        <img className="w-full h-full mb-10 md:mb-0" src={IotImg1} alt="" />
      </div>
      </div>

<div className="mt-10 pl-10 pr-10 ">
    <h1 className="font-bold text-4xl">IoT development services we provide</h1>
      <div className="flex flex-wrap items-center justify-between mt-5">
        {
          IotData.map((item)=>{
            return(
             <IotCart item={item}  />
            )
          })
        }
      </div>
      </div>
      </div>
    </>
  );
};

export default Iot;
