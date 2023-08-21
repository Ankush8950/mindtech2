import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TopNavbar from './components/TopNavbar/TopNavbar'
import JoinUs from './components/JoinUsSection/JoinUs'
import Form from "./components/Form/Form"

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Header />
      <JoinUs />
      <Form />
      <Footer />
    </div>
  )
}

export default App