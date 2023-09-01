import React,{useState} from 'react'
import './IndustryCard.css'
import Form from '../../Form/Form'

const IndustryCard = ({data}) => {
  const { IndustryBottomColor, IndustryImage, IndustryPara } = data;
  const [togggle,setToggle] = useState(false)

  return (
    <div className='rounded'>
    <div className="w-[350px] h-auto m-3 cursor-pointer rounded" onClick={()=>setToggle(true)}>
      <div className="w-full h-[200px] " >
        <img className='h-full w-full rounded-t' src={IndustryImage} alt="" />
      </div>
      <div className="h-[120px] pt-2 pb-2" style={{backgroundColor: `${IndustryBottomColor}`}}>
        <p className=" text-white p-5 font-semibold text-base">{IndustryPara}</p>
      </div>
    </div>
    {/* <div className='w-full h-full flex items-center justify-center'> */}
    {
      togggle ? <div className='flex items-center justify-center bg-[#343434a0] fixed top-0 left-0 w-full h-full z-20'><Form setToggle={setToggle} /> </div>: ""
    } 
    {/* </div> */}
    </div>
  )
}

export default IndustryCard