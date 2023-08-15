import React from 'react'
import JoinCard from './JoinCard/JoinCard'
import JoinUsData from "./JoinUsData"

const JoinUs = () => {
  return (
    <>
    <h1 className='font-bold text-4xl text-center mt-20 '>WHY JOIN US?</h1>
    <div className='flex items-center justify-center flex-wrap mt-20 mb-20 pl-10 pr-10 '>
{
  JoinUsData.map((item)=>{
    return <JoinCard item={item} />
  })
}
    </div>
    </>
  )
}

export default JoinUs