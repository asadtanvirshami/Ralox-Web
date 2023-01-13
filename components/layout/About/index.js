/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col } from "react-bootstrap";

import ContactForm from "../../shared/ContactForm";

const index = () => {
  return (
    <div className="about-page-main">
      <div className="">
      <section className="about-section-main ">
        <Row className="container">
          <Col md={6}>
            <div className="about-page-content" style={{ marginTop: 150 }}>
              <h3>
                WE HELP BUSINESSES BECOME DIGITAL GIANTS, PROMOTE THEM AS SO!
              </h3>
              <p>
                With RaloxSoft you can boost your company's online presence to
                compete in today's marketplace. We design and develop digital
                solutions that align with your business strategy, concept, and
                goals. Whether you need a website, mobile app, or online store,
                we can provide the end-to-end solution you need to succeed in
                the digital space.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-page-logo" style={{ marginTop: 150 }}>
              <img src={"logo.png"} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </section>
      <section>
      <div className="morals mt-5 container">
          <div className="morals-heading-div">
            <h3>ANALYZE BETTER WITH OUR PRINCIPLES OF DESIGN</h3>
          </div>
          <div className="morals-content-div">
            <ul>
              <li>
                <strong>THE HYMAN-HICK LAW-</strong> People are attracted to
                websites with cool images and fresh content. The colors you use
                and the fonts you choose should be easy to read.
              </li>
              <li>
                <strong>BLUE SKY THINKING-</strong> What do you want your
                website to look like? Do you want it to blend into the clouds or
                do you want it to stand out?
              </li>
              <li>
                <strong>PEOPLE BEFORE TECHNOLOGY-</strong> Your website should
                reflect the people who visit your site, not the technology
                behind it.
              </li>
              <li>
                <strong>USER EXPERIENCE-</strong> Your customers should feel at
                ease when they browse your website. contrast and colour.
              </li>
              <li>
                <strong>THIRD'S RULE-</strong> 3 clicks is the max a customer
                should have to go through to complete a purchase.
              </li>
              <li>
                <strong>USER INTENT -</strong> 30% of a website's visitors are
                browsing while they're on the go. This means it's important to
                create a mobile-responsive website.
              </li>
            </ul>
          </div>
        </div>
        <div className="description-div mt-5 container">
          <div className="description-heading-div">
            <h3>When Professionalism Meets Passion</h3>
            <p>
              Raloxsoft operates as a full-service digital
              marketing agency that has been evolving rapidly since its start.
              Our creative studio agency excels in digital marketing, website
              designing & development, branding, social media marketing, mobile
              app development, and other digital solutions. Our studio is a
              complete game-changing platform for all digital marketing needs
              that is always available to provide exceptional designing and
              development services at cost-effective packages. We aim to deliver
              the best customer experience and services since client
              satisfaction is our top priority. Our passion for delivering
              top-notch quality services to our valued clients helps us bring up
              new, creative, and fresh ideas into our agency.
            </p>
          </div>
          <ContactForm/>
        </div>
      </section>
      </div>
    </div>
  );
};

export default index;
