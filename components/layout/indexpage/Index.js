import React from 'react'
import AboutUsSection from './AboutUsSection'
import { Carousels } from './Carousels'
import Count from './Count'
import ServicesSection from './ServicesSection'

export const Index = () => {
  return (
    <div>
        <Carousels/>
        <AboutUsSection/>
        <ServicesSection/>
        <Count/>
    </div>
  )
}

export default Index 
