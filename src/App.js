import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TopNavbar from './components/TopNavbar/TopNavbar'
import IndustriesSection from './components/IndustriesSection/IndustriesSection'
import JoinUs from './components/JoinUsSection/JoinUs'

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Header />
      <IndustriesSection />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default App
