/* eslint-disable react/no-unescaped-entities */
import React from "react";

import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import Section_4 from "./Section4";
import Count from "./Count";
import PricingSection from "./PricingSection/PricingSection";

export const Index = () => {
  return (
    <>
      <div className="section_1">
        <section className="section-div">
          <div className="hero-container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-7">
                <div className="content">
                  <h1 className="Title">
                    <strong>Welcome to</strong>
                    <i className="Company_name"> RALOX</i>
                  </h1>
                  <h1 className="headline">
                    <strong>
                      The Branding Studio That Takes Your Business to The Next
                      Level
                    </strong>
                  </h1>
                  <h1 className="Caption">
                    "Our customer's satisfaction matters us the most."
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ServicesSection/>
      <div style={{marginBottom:150}}><Count/></div>
      <AboutUsSection/>
      <Section_4/>
      <PricingSection/>
    </>
  );
};

export default Index;
