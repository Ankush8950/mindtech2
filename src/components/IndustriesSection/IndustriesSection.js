import React from 'react'
import './IndustriesSection.css'
import IndustryCard from './IndustryCard/IndustryCard'
import IndustryData from './IndustryData'


const IndustriesSection = () => {
  return (
    <>
    <div className="IndustriesSection_container">
    {IndustryData.map( (elm, index) => {
      return <IndustryCard data={elm} key={index}/>
    })}
    </div>
    </>
  )
}

export default IndustriesSection