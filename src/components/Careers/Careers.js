import React from 'react'
import JoinUs from "../JoinUsSection/JoinUs"
import CarrerImg from "../Image/careers.jpg"

const Careers = () => {
  return (
    <div>
      <div className='w-full h-[350px] opacity-75' style={{backgroundImage:`url(${CarrerImg})`,backgroundPosition:"center",backgroundSize:"cover"}} >
        
      </div>
      <div>
        <JoinUs />
      </div>
    </div>
  )
}

export default Careers