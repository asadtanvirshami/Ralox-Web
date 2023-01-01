import React from "react";

import { Button, Row, Col } from "react-bootstrap";

const Section_4 = () => {
  return (
    <section className="about add_before">
      <div className="container">
        <div className="about-us-section">
          <Row style={{ marginTop: 50 }}>
            <Col md={6}>
              <div style={{ top: 0 }}>
                <img src={"laptop.png"} className="img-shadow img-fluid" />
              </div>
              <div className=""></div>
            </Col>
            <Col md={6} style={{ marginTop: 30 }}>
              <p style={{ color: "red", fontSize: 22, fontWeight: "600" }}>
                Created With Passion
              </p>
              <h2 style={{color:'white', fontSize:35}} className='about-us-heading'>
                Think of us as an extension of your organization, working
                tirelessly to give you the results that will take you to the
                top.
              </h2>
              <h3 className="mt-4" style={{color:'white'}}>
                Our branding studio fully understands the difficulty of putting
                the responsibility and the future of your company in the hands
                of another; that is why we pour all our skills, time, and
                expertise into every single project we get. We take pride in our
                highly affordable packages that are fully aligned with your
                business goals and keep ourselves up to date with the current
                market techniques so that we can provide result-driven business
                solutions that help your business grow and prosper. It’s a
                failure for us if we can’t get your business to the heights we
                promised.
              </h3>
              <div className="text-center mt-5">
                <div className="">
                 
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
