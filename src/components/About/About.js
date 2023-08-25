import React from "react";
import { Link } from "react-router-dom";
import AboutTopImage from "../Image/sub-header.jpg";
import Our_Approuch from "../Image/our_approch-preview.png"
import TeamWork from "../Image/teamwork-web-concept.avif"


const About = () => {
  return (
    <div className="font-roboto pb-5">
      <div
        className="w-full h-[350px] flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutTopImage})` }}
      >
        <h1 className="flex items-center justify-center font-bold text-5xl text-white">
          About Us
        </h1>
      </div>
      <div className="pl-10 pr-10 w-full pt-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <img src={TeamWork} alt="" />
        </div>
        <div className="md:w-1/2 bg-gray p-3">
          <h1 className="font-bold text-4xl pt-5">About Us</h1>
          <p className="font-normal text-base pt-5">
            We are a software consulting company that delivers cutting edge
            solutions for global organisations and technology start-ups. For
            more than 2 decades, we have been helping brands reimagine their
            business through digitalisation. We provide services that improve
            software architecture, overall operations by optimising software
            portfolio and also create a tech-driven strategy. Our team of
            professionals will make your digital transformation journey a
            success, through careful planning and effective execution of the
            outlined IT strategy.
          </p>
          <Link to="/contact">
            <button className="bg-orange pl-7 pr-7 pt-2 pb-2 text-lg rounded text-white mt-5">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pl-10 pr-10">
        <div className="md:w-1/2 bg-gray pt-10 pb-10 p-3">
          <h1 className="font-bold text-4xl">Our Approach</h1>
          <p className="font-normal text-base pt-5">
            At <span className="text-blue italic">siliconbridge technologies</span> , we have been helping organizations of
            different scales and structures to improve and modernise their IT
            strategies. We craft an effective approach to IT consulting, which
            enables us to deliver maximum benefit in a short span of time.
          </p>
          <p className="pt-5 font-normal text-base"> 
            We always keep track of emerging technologies to deliver advanced
            software solutions to our clients. We not only facilitate you in
            choosing the right technology for your business, but also in mapping
            out the implementation strategy and helping you implement them.</p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={Our_Approuch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
