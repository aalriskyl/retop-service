import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Service from '../components/Service'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Landing
