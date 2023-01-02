import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import EcomPackage from './EcomPackage'
import LogoPackage from './LogoPackage'
import MobileAppPackage from './MobileAppPackage'
import ShopifyPackage from './ShopifyPackage'
import Webpackage from './Webpackage'

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
            <Tabs className='tab-btns justify-content-center'>
            <Tab  eventKey="Logo" title="Logo Packages">
              <LogoPackage/>
              </Tab>
            <Tab eventKey="Web" title="Web Packages">
              <Webpackage/>
            </Tab>
            <Tab eventKey="Ecom" title="Ecom-Website Packages">
             <EcomPackage/>
            </Tab>
            <Tab eventKey="Shopify" title="Shopify Packages">
            <ShopifyPackage/>
            </Tab>
            <Tab eventKey="App" title="App Packages">
            </Tab>
            <Tab eventKey="App" title="App Packages">
            </Tab>
            </Tabs>
           
        </div>
      </div>
    </section>
  )
}

export default PricingSection
