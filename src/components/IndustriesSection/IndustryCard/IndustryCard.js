import React from 'react'
import './IndustryCard.css'

const IndustryCard = ({data}) => {
  console.log(data)
  const { IndustryBottomColor, IndustryImage, IndustryPara } = data;
  return (
    <>
    <div className="IndustryCard_container">
      <div className="IndustryCard_image" style={{backgroundImage: `url(${IndustryImage})`}}></div>
      <div className="IndustryCard_footer" style={{backgroundColor: `${IndustryBottomColor}`}}>
        <p className="IndustryCard_para">{IndustryPara}</p>
      </div>
    </div>
    </>
  )
}

export default IndustryCard