import React from "react";
// import AppDevelopmentImg from "../Image/app-development.jpg"
import serviceData from "../Services/ServiceData";
import cartData from "./CartApp";
import Slider from "react-slick";


const AppDevelopment = () => {
  var settings = {
    infinite: true,
    speed: 1000,
    pauseOnHover: false,
    autoplay: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="font-roboto flex flex-col items-center justify-center pb-20">
    <div className="w-[95%] h-full mt-5 ">
    <Slider {...settings}>
      
        {cartData.map((item) => {
          return (
            <>
            <div
              className="w-full h-[400px]  flex  items-center justify-start"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
            {/* <img src={item.img} alt="" /> */}
              <div className="flex flex-col pl-20">
                <h1 className="font-bold text-4xl text-white">
                {item.name}
              </h1>
              <p className="text-white pt-5 w-2/3">{item.para}</p>
              </div>
            </div>
            </>
          );
        })}
      </Slider>
      </div>
<div>
        <h1></h1>
      <div className="flex flex-wrap space-x-3 mt-10">
        {serviceData.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center w-[250px] rounded h-[230px] shadow-xl cursor-pointer text-[#04789D] hover:bg-[#04789D] hover:text-white">
              <p className="text-3xl ">{item.icon}</p>
              <h1 className="capitalize pt-5 font-semibold text-xl">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
      </div>
      {/* <div className='p-10 w-5/6 bg-gray mt-10 mb-10 rounded'>
            <h1 className='font-bold text-3xl'>Application Development</h1>
            <div className='pt-5'>
                <p className='font-medium text-base'>Application development is complex and dynamic. To meet business needs, leaders must align with an application development services partner that possesses a proven track record, a quality approach to delivering consistent results and the expertise required to drive successful outcomes.</p>
                <p  className='font-medium text-base mt-5'>Our Application Development practice specializes in application services that span the full software development life cycle. Through our commitment to superior customer service and a personal dedication to helping our clients achieve success, we maintain a customer satisfaction score that is 20 percent higher than the industry average.</p>
                <p  className='font-medium text-base mt-5'>Our team follows one of two approaches to development. In full lifecycle application projects, we assume complete responsibility for analysis, design, implementation, testing and integration of systems. In cooperative development, we work with your IT professionals to jointly analyze, design, implement, test and integrate systems.</p>
                <h1 className='mt-5 font-semibold text-xl'>Transform your application development into a strategic business advantage:</h1>
                <ul className='pl-5 list-disc	mt-3'>
                    <li className='font-normal text-base'>Reduce time to market with Agile development systems.</li>
                    <li className='font-normal text-base'>Future proof strategic business processes with Service Enablement.</li>
                    <li className='font-normal text-base'>Improve development quality to reduce defects and rework.</li>
                    <li className='font-normal text-base'>Design and develop new applications in support of business process change.</li>
                    <li className='font-normal text-base'>Leverage emerging technologies and platforms to enhance capability.</li>
                    <li className='font-normal text-base'>Enable rapid development using new technologies and accelerators.</li>
                    <li className='font-normal text-base'>Work to reduce capital expenditure through utility models.</li>
                </ul>
            </div>
        </div> */}
    </div>
  );
};

export default AppDevelopment;
