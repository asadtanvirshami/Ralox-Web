import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../public/logohailwhite.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: " #0c73bb", marginTop: 100, padding: 15 }}>
      <Row className="justify-content-center">
            <Col className="img-list justify-content-center" md={1} style={{alignSelf:"center"}}>
              <Image src={Logo} className="img-fluid" height={120} width={120} />
            </Col>
        <Col md={4} xs={12} xl={3} className="details-col">
          <ul>
            <li className="text-list">
              <p>
                We are Hail. Technologies, a single solution for all your
                business needs. We offer all IT software services along with
                consultation for small-scale companies. It’s our first-hand
                experience with big-ticket clients that has led to the
                development of an innovative mindset. Expect Hail. Technologies
                team to stay on their feet to address all your worries.
              </p>
            </li>
          </ul>
        </Col>
        <Col md={4} xs={12} xl={2} className="location-col">
          <ul>
            <li className="text-list">
              <h1>Locations</h1>
            </li>
            <li className="text-list">
             <h5>Karachi,Pakistan</h5> 
            </li >
            <li className="text-list">
              <h5>Toronto,Canada</h5>
            </li>
            <li className="text-list">
            <h5>KualaLumpur,Malaysia</h5>
            </li>
          </ul>
        </Col>
        <Col md={3} xs={12} xl={2} className="page-col">
          <ul>
            <li className="text-list"><h3>Pages</h3></li>
          <a href="/" className="text-list"><li className="text-list"><h6>Home</h6></li></a>
          <a href="/" className="text-list"><li className="text-list"><h6>Services</h6></li></a>
          <a href="/" className="text-list"><li className="text-list"><h6>Contact Us</h6></li></a>
          <a href="/" className="text-list"><li className="text-list"><h6>About Us</h6></li></a>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
