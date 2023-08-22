import React from 'react'
import "./JoinCard.css"


const JoinCard = ({item}) => {
  return (
    <div className='w-[400px] lg:w-[360px] h-[300px] lg:h-[250px] shadow-2xl m-3 lg:m-10 rounded-xl relative joinCard font-roboto bg-white'>
      <img className='absolute top-[-60px] right-5' src={item.MainImage} alt=''/>
        <div className='pt-[100px] flex pr-2'>
          <div>
            <img className='w-[100px]' src={item.NumberIcon} alt='tst'/>
          </div>
       <div className='ml-3'>
       <h1 className='font-semibold text-lg'>{item.Heading}</h1>
        <p className='font-normal text-base mt-5'>{item.SubHeading}</p>
       </div>
        </div>
    </div>
  )
}

export default JoinCard