import React from 'react'
import serviceData from './ServiceData'

const Services = () => {
  return (
    <div className=''>
      {
        serviceData.map((item)=>{
          return(
            <div>
              <h1>{item.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services