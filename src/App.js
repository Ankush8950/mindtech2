import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import TopNavbar from './components/TopNavbar/TopNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from "./components/Contact/Contact"
import About from "./components/About/About.js"
import Services from "./components/Services/Services.js"
import Careers from "./components/Careers/Careers.js"
import ScrollToTop from './components/ScrollToTop'



const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  )
}

export default App
