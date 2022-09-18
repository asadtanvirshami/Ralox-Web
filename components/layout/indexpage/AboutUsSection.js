import React from "react";
import Image from "next/dist/client/image";
import { Button, Container, Row } from "react-bootstrap";
import shape01 from "../../../public/services.png";
import arrow from "../../../public/arrow.png";
import Aos from "aos";

export const AboutUsSection = () => {
  return (
    <Container>
      <div className="main-div mt-5 px-4">
        <Row className="aboutus-row">
          <div className="aboutus-col col-md-6 mt-5">
            <li className="aboutus-heading">ABOUT US</li>
            <h1 className="paragraph-heading">Making great thing Possible</h1>
            <p className="paragraph-text mt-3">
              We are Hail. Technologies, a single solution for all your business
              needs. We offer all IT software services along with consultation
              for small-scale companies.
              <br />
              <br />
              It’s our first-hand experience with big-ticket clients that has
              led to the development of an innovative mindset. Expect Hail.
              Technologies team to stay on their feet to address all your
              worries.
            </p>
            <div className="process-div row mb-5">
              <div className="col-md-12 mb-5">
                <span className="main-span">
                  <h5 className="sub-headings px-3">
                    Information to Marketing needs
                  </h5>
                  <p className="sub-text mx-3">
                    You uncover great secrets when you probe into customers
                    mindset. This was the stance that helped Hail. to work out
                    fantastic campaigns for its clients. It intends to continue
                    learning new marketing strategies and giving a competitive
                    edge to its customers.
                  </p>
                </span>
                <span className="main-span">
                  <h5 className="sub-headings px-3">
                    Better SEO and Market Research
                  </h5>
                  <p className="sub-text mx-3">
                    We have heavily relied on knowledge-oriented
                    decision-making, and rightfully so. Our market research and
                    great SEO skills has helped companies to carve Clients
                    website on top of google search.
                  </p>
                </span>
                <span className="main-span">
                  <h5 className="sub-headings px-3">Website and Application</h5>
                  <p className="sub-text mx-3">
                    Every Business, big or small require an online presence
                    which includes website and application, sometimes both. So
                    why look any further? This is where you find satisfaction.
                    We provide work and trust at a same platform.
                  </p>
                </span>
                <span className="aboutus-btn-div mx-3 mt-5">
                  <Button className="aboutus-btn col-md-6">
                    About us
                    <span style={{ float: "right", marginTop:2}}>
                      <Image
                        height={30}
                        width={32}
                        src={arrow}
                        className="img-fluid"
                      />
                    </span>
                  </Button>
                </span>
              </div>
            </div>
          </div>

          <div className="aboutus-col col-md-6">
            <div className="mt-1">
              <Image src={shape01} />
            </div>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default AboutUsSection;
