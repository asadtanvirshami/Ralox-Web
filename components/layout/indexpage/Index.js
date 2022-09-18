import React from 'react'
import AboutUsSection from './AboutUsSection'
import { Carousels } from './Carousels'
import ServicesSection from './ServicesSection'

export const Index = () => {
  return (
    <div>
        <Carousels/>
        <AboutUsSection/>
        <ServicesSection/>
    </div>
  )
}

export default Index 
