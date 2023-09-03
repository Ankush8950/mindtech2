import React from 'react'
import './IndustriesSection.css'
import IndustryCard from './IndustryCard/IndustryCard'
import IndustryData from './IndustryData'
import ABoutImg from "../Image/about-us.png"
import { Link } from 'react-router-dom'


const IndustriesSection = () => {
  return (
    <>
    <div>

    <div className="IndustriesSection_container pb-10">
    {IndustryData.map( (elm, index) => {
      return <IndustryCard data={elm} key={index}/>
    })}
    </div>

    <div className='sm:p-10 font-roboto sm:mt-10 mb-20 '>
      {/* <h1 className='text-center font-bold text-3xl'>About Us</h1> */}
      <div className='flex flex-col md:flex-row w-full mt-10 shadow-xl rounded p-10'>
      <div className='1/2 flex items-center justify-center'>
        <img className='md:w-2/3' src={ABoutImg} alt="" />
      </div>
       <div className='md:w-1/2 sm:pl-5 space-y-3 mt-5 md:mt-0'>
         <h1 className='font-semibold text-xl capitalize text-[#04789D]'>who we are </h1>
        <p className='font-medium text-base pt-5'>At Silicon Bridge Technologies, we are the architects of possibility, the creators of innovation, and the catalysts for change.Established in 2018 in the thriving hub of Bengaluru, we have emerged as a dynamic force in the realm of Information Technology services and consulting, specializing in serving the distinct needs of storage, server, and semiconductor companies.Our identity is rooted in our founding values, our unwavering commitment, and our relentless pursuit of excellence.</p>
        <Link to="/about-us" >
          <button className='border border-[#04789D] pl-5 pr-5 pb-1 pt-1 font-medium text-[#04789D] hover:bg-[#04789D] hover:text-white rounded text-base mt-5'>Learn More</button>
        </Link>
       </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default IndustriesSection