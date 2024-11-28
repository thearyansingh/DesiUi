import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Discount from './components/Discount'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
  <Header/>
  <Hero/>
  <About/>
  <Discount/>
  <Gallery/>
  <Footer/>
    </div>
  )
}

export default App
