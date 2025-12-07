import React from 'react'

import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import About from '../components/About'
import { Helmet } from 'react-helmet'; 
import Mission from '../components/Mission'
import Vision from '../components/Vision'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'
import Values from '../components/Values'
import Faqs from '../components/Faqs'
const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Container Shipping for Furniture | Safe, Affordable & Secure Transport </title>
        <meta 
          name="description" 
          content="Enjoy a container ship for your furniture at a reasonable price. Professional packing, security during loading, and competitive container shipping charges are what you will get. Our goal is to facilitate your local or international move by providing safety, punctuality, and stress-free delivery." 
        />
      </Helmet>
      <Hero />
      <About/>
      <Values/>
      <Gallery/>
      <Vision/>
      <Mission />
      <Services />
      
      <Blog />
      <Faqs />
      <ContactUs />
      
      
      
    </div>
  )
}

export default HomePage
