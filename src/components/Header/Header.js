import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import Slider from "react-slick";
import HeaderCart from "./HeaderCart";
import "./Header.css"

const Header = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    pauseOnHover: false,
    autoplay: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <div className="slider">
        <Slider {...settings}>
          {HeaderCart.map((item) => {
            return (
              <>
                <div
                  className="w-full h-[350px] sm:h-[400px] md:h-[500px] pt-2 flex  items-center justify-start"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img src="" alt="" /> */}
                  <div className="flex flex-col items-start justify-start w-full pl-5 sm:pl-20">
                    <h1 className="font-bold text-xl sm:text-4xl text-white">{item.name}</h1>
                    <p className="font-semibold text-base sm:text-xl pt-10 text-white sm:w-1/2">
                      {item.para}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>

      <div className="fixed bottom-10 right-10 z-20 bg-[#44C054] p-2 rounded">
        <a href="https://wa.me/9035798458">
          <BsWhatsapp size={40} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Header;
