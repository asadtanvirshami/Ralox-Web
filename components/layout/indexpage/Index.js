/* eslint-disable react/no-unescaped-entities */
import React from "react";

import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import Section_4 from "./Section4";
import Count from "./Count";
import PricingSection from "./PricingSection/PricingSection";
import Slider from "../indexpage/Slider";
import ContactForm from "../../shared/ContactForm";

export const Index = () => {
  return (
    <>
      <div className="section_1">
        <section className="section-div">
          <div className="hero-container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="content">
                  <h1 className="Title">
                    <strong>Welcome to</strong>
                    <i className="Company_name"> <img src={'logo.png'} className="img-fluid"/></i>
                  </h1>
                  <h1 className="headline">
                    <strong>
                      "WE HELP BUSINESSES BECOME DIGITAL GIANTS, PROMOTE THEM AS
                      SO"
                    </strong>
                  </h1>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:130}}>
                <div className="content">
                  <h1 className="headline">
                    <strong>A Creative, Flexible & Affordable Agency</strong>
                  </h1>
                  <h3 className="caption2">
                    Make a difference in the lives of your clients with
                    RaloxSoft! Transform your digital business into a success
                    with our proven design and development services.
                  </h3>
                  <div className="caption2">
                    "Our customer's satisfaction matters us the most."
                  </div>
                  {/* <div className="m-auto mt-5">
                    <img src={"home-tag.png"}/>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ServicesSection />
      <div style={{ marginBottom: 150 }}>
        <Count />
      </div>
      <AboutUsSection />
      <Section_4 />
      <div style={{ marginTop: 160 }}></div>
      <Slider />
      <PricingSection />
      <div style={{ marginTop: 100 }}></div>
      <ContactForm/>
      <div style={{ marginTop: 130 }}></div>
    </>
  );
};

export default Index;
