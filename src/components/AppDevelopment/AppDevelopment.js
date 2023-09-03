import React from "react";
import devops from "../Image/devOpsRightColImg-1-removebg-preview.png";
import VirtualizationImg from "../Image/Virtualization-removebg-preview.png";
import QAAUtomationImg from "../Image/qa-automation-tools-banner-image-removebg-preview.png";
// import serviceData from "../Services/ServiceData";
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
    slidesToScroll: 1,
  };
  return (
    <div className="font-roboto flex flex-col items-center justify-center pb-20">
      <div className="w-full h-[300px] sm:h-[450px] overflow-hidden">
        <div className="w-full h-full mt-5 ">
          <Slider {...settings}>
            {cartData.map((item) => {
              return (
                <>
                  <div
                    className="w-full h-[300px] sm:h-[450px]  flex  items-center justify-start"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    {/* <img src={item.img} alt="" /> */}
                    <div className="flex flex-col pl-5 sm:pl-20">
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
      </div>
      <div>
        {/* <h1></h1> */}
        {/* <div className="flex flex-wrap items-center justify-center mt-10">
          {serviceData.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center w-[250px] rounded h-[230px] shadow-xl cursor-pointer text-[#04789D] hover:bg-[#04789D] hover:text-white m-2">
                <p className="text-3xl ">{item.icon}</p>
                <h1 className="capitalize pt-5 font-semibold text-xl">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div> */}

        {/* QA Automation */}

        <div className="bg-gray pl-10 pr-10 pb-10">
          <h1 className="text-center font-bold text-3xl pt-10 text-[#18477E]">
           QA Automation 
          </h1>
          <div className="w-full h-[2px] bg-[#18477E] mt-3"></div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="pl-5 pt-10 lg:pt-10">
              <img src={QAAUtomationImg} alt="" />
            </div>
            <div className="pt-10 w-full lg:w-1/2 md:pl-10">
              <p className="font-medium text-base">
               Silicon Bridge Technologies help in customizing the test automation framework of the monolithic enterprise applications to be compatible with micro - services applications.Our QA experts also can help you in integrating Lab Reservation, Log Collection and Auto Triaging Application with Jenkins CI Software.
              </p>
              <p className="font-medium text-base pt-3">
               We help ISVs and Enterprises by Framework Engine, which is capable of testing unit/system level functionalities of microservices based applications. It communicates with microservices and validate the capability based on the configuration provided. This Engine test suite / Framework libraries can be scaled according to the number microservices in the application. Further, the Framework Harness is standalone and / or can be plugged into DevOps environment for build monitoring / execution / reporting.
              </p>
              
            </div>
            
          </div>
        </div>

        {/* devops */}
        <div className="bg-gray pl-10 pr-10 pb-10">
          <h1 className="text-center font-bold text-3xl pt-10 text-[#18477E]">
            DevOps
          </h1>
          <div className="w-full h-[2px] bg-[#18477E] mt-3"></div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
            <div className="pt-10 w-full lg:w-1/2 ">
              <p className="font-medium text-base">
                Silicon Bridge Technologies carves your path towards modern IT
                by empowering you to create a platform-centric architecture. Our
                DevOps Automation Specialists allow easy managing of
                cloud-native and traditional workloads while ensuring seamless
                application development and delivery.
              </p>
              <p className="font-medium text-base pt-3">
                Silicon Bridge Technologies doesn’t just bring a 360-degree
                DevOps culture at first. We undertake a modular approach and
                create a rational roadmap, underlining the organization’s unique
                needs. Our DevOps Architects then gauge your organization’s
                maturity levels at multiple fronts. Based on your existing IT
                infrastructure strength, we leverage Infrastructure as Code
                (IaC) to induce intelligent automation within your
                infrastructure and ensure it adapts to heavy workloads at scale.
                This ensures minimum vendor-lock ins.
              </p>
              <ul className="list-disc mt-5 space-y-2">
                <li className="font-semibold text-sm">
                  Building ecosystem around Docker containers using
                  configuration management tools such as Ansible, Chef, Puppet
                  etc.
                </li>
                <li className="font-semibold text-sm">
                  Product development support for making service container ready
                  with Microservice architecture.
                </li>
                <li className="font-semibold text-sm">
                  Cloud Integration for containers and supplementary tool chain.
                </li>
                <li className="font-semibold text-sm">
                  Develop ecosystem and workflows around EC2 Container service
                  to allow seamless configuration and deployment of VMs
                </li>
                <li className="font-semibold text-sm">
                  Orchestration using Apache Mesos to launch dynamic workloads
                  onto a single cluster
                </li>
              </ul>
            </div>
            <div className="pl-5 pt-10 lg:pt-10">
              <img src={devops} alt="" />
            </div>
          </div>
        </div>

        {/* Virtualization */}
        <div className="bg-gray pl-10 pr-10 pb-10">
          <h1 className="text-center font-bold text-3xl pt-10 text-[#18477E]">
            Virtualization
          </h1>
          <div className="w-full h-[2px] bg-[#18477E] mt-3"></div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="pl-5 pt-10 lg:pt-10 w-1/2">
              <img src={VirtualizationImg} alt="" />
            </div>
            <div className="pt-10 w-full lg:w-1/2 md:pl-10">
              <p className="font-medium text-base">
                Silicon Bridge Technologies has gathered expertise in all areas
                of virtualization by executing multiple virtualization projects
                on different platforms like VMware and Microsoft Hyper-V. We
                have helped several ISVs in developing innovative solutions that
                take advantage of growing technologies and reducing costs
                without compromising on quality or efficiency. Our
                virtualization architects efficiently consolidate your
                networking, storage, and server infrastructure helping you
                handle dynamic workloads and save costs, concurrently. Our
                engineers help you integrate VMware, Citrix Xen, Hyper-V, and
                KVM to support their product features within these platforms.
                They further create a hassle-free infrastructure management
                environment by developing vCenter, SCVMM, VCO, XenCenter, and
                snapshot management plugins. We help you with the execution of
                VMware, WHQL/WLK, Citrix, and Linux certifications by setting up
                a certification environment.
              </p>

              <h1 className="font-semibold text-lg mt-5">
                Our focus areas include
              </h1>
              <ul className="list-disc mt-2 space-y-2">
                <li className="font-semibold text-sm">
                  Desktop virtualization
                </li>
                <li className="font-semibold text-sm">
                  Server virtualization.
                </li>
                <li className="font-semibold text-sm">
                  Storage virtualization.
                </li>
                <li className="font-semibold text-sm">
                  Network virtualization
                </li>
                <li className="font-semibold text-sm">
                  Application virtualization
                </li>
              </ul>
            </div>
          </div>
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
