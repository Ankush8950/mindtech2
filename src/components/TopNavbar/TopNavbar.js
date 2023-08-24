import React from 'react'
import {FaMobileAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

const TopNavbar = () => {
  return (
    <div className='flex items-center justify-end pt-2 pb-2 space-x-6 pr-10 font-roboto bg-[#dadada]'>
        <a href="tel:1234567890" className='flex  hover:underline items-center justify-end font-medium text-[#04789D]'> <span className='mr-2'><FaMobileAlt /></span> 1234567890</a>
        <a href="mailto:info@company.com" className='flex  hover:underline items-center justify-end font-medium text-[#04789D]'> <span className='mr-2'><AiOutlineMail /></span>info@siliconbridgetechnologies.com</a>
    </div>
  )
}

export default TopNavbar