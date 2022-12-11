/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Button, Row, Col } from "react-bootstrap";

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
                    <i className="Company_name">RALOX</i>
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
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="content_2 mx-auto">
                  <h1 className="bottom-heading">CONSULT – CREATE – COMPLY</h1>
                  <h1 className="bottom-text mt-5">
                    Develop Unique-Custom Brand Identities And Online Platforms
                    Through Our Creative Studio That Distinguish You From The
                    Rest And Elevate Your Reputation.
                  </h1>
                  <div className="service-in ">
                    <div className="service-in-child">
                      <ul>
                        <a>
                          <li>
                            <img src={"website.png"}></img>
                            <h4 className="card-text mt-4">Web Development</h4>
                          </li>
                        </a>
                      </ul>
                      <ul>
                        <a>
                          <li>
                            <img src={"smartphone.png"}></img>
                            <h4 className="card-text mt-4">
                              Mobile Application Development
                            </h4>
                          </li>
                        </a>
                      </ul>
                      <ul>
                        <a>
                          <li>
                            <img src={"logo-design.png"}></img>
                            <h4 className="card-text mt-4">
                              Logo & Brand Strategy
                            </h4>
                          </li>
                        </a>
                      </ul>
                      <ul>
                        <a>
                          <li>
                            <img src={"social-media.png"}></img>
                            <h4 className="card-text mt-4">
                              Digital & SEO Marketing
                            </h4>
                          </li>
                        </a>
                      </ul>
                      <ul>
                        <a>
                          <li>
                            <img src={"animation.png"}></img>
                            <h4 className="card-text mt-4">
                              Video Animation & Production
                            </h4>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <div className="">
                  <Button className="btn-lg mx-1 mb-5">Start Project</Button>{" "}
                  <Button className="btn-lg mx-1 mb-5">Our Portfolio</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="about add_before mt-5">
      <div className="container">
        <div className="">
          <Row style={{marginTop:50,}}>
            <Col md={6} style={{marginTop:140}}>
              <p style={{color:'#ED213A',fontSize:22,fontWeight:'600'}}>What We Stand For</p>
              <h2 style={{color:'#232529',fontWeight:'600'}}>The Most Creative Studio Agency In The Global Market</h2>
              <h3 style={{color:'#232529',fontWeight:'100',fontSize:20,textAlign:'justify'}}>
                What We Stand For The Most Creative Studio Agency In The Global
                Market What was once a small, competing digital agency in 2018
                is now one of the leading digital hubs that has helped countless
                start-up businesses to stand up on their feet across the globe.
                We don’t make logos; we create brand identities; we don’t make
                websites; we make an online presence. With a flexible, capable
                and experienced team of digital players working in a creative
                studio, our game-changing deliveries give our clients the direct
                path to prosperity and success in these extraordinarily
                competitive times.
              </h3>            
              </Col>
            <Col md={6}>
              <div style={{top:0}}>
                <img src={"meet.png"} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
    </>
  );
};

export default Index;
