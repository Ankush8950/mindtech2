import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TopNavbar from './components/TopNavbar/TopNavbar'

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App