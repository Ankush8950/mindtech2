import React from 'react'
import {BsWhatsapp} from "react-icons/bs"

const Header = () => {
  return (
    <div className='flex'>
    <div className='w-full h-full pt-2' style={{backgroundImage: 'url(https://www.mindteck.com/assets/sliders/63366092_medical-devices-dts.jpg)',width: '100%',height: '100%'}}>
        {/* <img src="" alt="" /> */}
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <h1 className='font-bold text-4xl text-white'>CAREERS</h1>
            <p className='font-semibold text-lg pl-20 pr-20 pt-10 text-white text-center'>At AMCI, we are looking for someone who is having a mind full of creativity and willing to expand their helping hands to make the platform captivating for the country’s medical field. If you decide to join us, you will be getting an awe-inspiring chance to work with a diverse team of doctors from all over the nation, hard-working engineers, talented designers, and many other folks to bring a brighter future for this platform.</p>
        </div>
    </div>
    <div className='fixed bottom-10 right-10 z-20 bg-[#44C054] p-2 rounded'>
      <a href="https://wa.me/7282088791">
        <BsWhatsapp size={40} color='white'/>
      </a>
    </div>
    </div>
  )
}

export default Header