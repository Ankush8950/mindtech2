import React from 'react'
import JoinUs from "../JoinUsSection/JoinUs"
import CarrerImg from "../Image/careers.jpg"

const Careers = () => {
  return (
    <div>
      <div className='w-full lg:h-[400px] opacity-75' >
        <img src={CarrerImg} alt="" />
      </div>
      <div>
        <JoinUs />
      </div>
    </div>
  )
}

export default Careers