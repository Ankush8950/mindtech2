import React from 'react'

const IotCart = ({item}) => {
  return (
        <div className='md:w-5/12 mt-4 font-roboto'>
            <img src={item.icon} alt="" />
            <h1 className='font-semibold text-lg pt-3'>{item.title}</h1>
            <p className='font-medium text-base pt-3'>{item.para}</p>
        </div>
  )
}

export default IotCart