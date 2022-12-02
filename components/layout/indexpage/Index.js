import React from 'react'

import {Row,Col, Container} from 'react-bootstrap'

import AboutUsSection from './AboutUsSection'
import ServicesSection from './ServicesSection'
import { Carousels } from './Carousels'
import Count from './Count'

export const Index = () => {
  return (
    <div className='pt-5 justify-content-center'>
      <Row className='container'>
        <Col md={7}> 
        <div className='container'>
          <h1 className="Title">Welcome to <i className='Company_name'>RALOX</i></h1>
          <h1 className="Caption">"Our customers matters us the most."</h1>
        </div>
        </Col>
        <Col  md={5} >
          <div style={{float:'left'}}>
          <img src={'design_1.png'} className="hero-img"/>
          </div>
        </Col>
      </Row>
      <img src={'wave.svg'} className="img-fluid"/>
      <Container>
        <AboutUsSection/>
        <ServicesSection/>
        <Count/>
       </Container> 
    </div>
  )
}

export default Index 
