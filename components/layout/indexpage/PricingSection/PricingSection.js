import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import LogoPackage from './LogoPackage'

const PricingSection = () => {
  return (
    <section className='our-pricing'>
      <div className='container'>
        <div className='row text-center'>
           <div className='col-md-12'>
            <div className='contents'>
            <h6 style={{fontWeight:'800'}}>Pricing Plans</h6>
            </div>
            </div> 
            <Tabs className='justify-content-center'>
            <Tab  eventKey="Logo Designs" title="Logo Packages">
              <LogoPackage/>
              </Tab>
              <Tab eventKey="2" title="2">
              </Tab>
              <Tab eventKey="3" title="3">
              </Tab>
            </Tabs>
           
        </div>
      </div>
    </section>
  )
}

export default PricingSection
