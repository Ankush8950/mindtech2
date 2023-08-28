import React from 'react'
import AppDevelopmentImg from "../Image/app-development.jpg" 

const AppDevelopment = () => {
  return (
    <div className='font-roboto flex flex-col items-center justify-center'>
        <div className='w-full h-[350px] opacity-75 flex items-center justify-center'  style={{backgroundImage: `url(${AppDevelopmentImg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <h1 className='font-bold text-4xl text-white'>Application Development</h1>
        </div>
        <div className='p-10 w-5/6 bg-gray mt-10 mb-10 rounded'>
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
        </div>
    </div>
  )
}

export default AppDevelopment