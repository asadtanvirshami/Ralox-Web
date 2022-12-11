import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#232529", marginTop: 100, padding: 15 }}>
      <Row className="justify-content-center">
            <Col className=" justify-content-center" md={2} style={{alignSelf:"center"}}>
            <h1 style={{fontSize:60}} className='Company_name'>RALOX</h1>
            </Col>
        <Col md={4} xs={12} xl={3} className="details-col">
          <ul>
            <li className="text-list">
              <p>
                We are Ralox, a single solution for all your
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
          </ul>
        </Col>
        <Col md={3} xs={12} xl={2} className="page-col">
          <ul>
            <li className="text-list"><h3>Pages</h3></li>
          <Link href="/" className="text-list"><li className="text-list"><h6>Home</h6></li></Link>
          <Link href="/" className="text-list"><li className="text-list"><h6>Services</h6></li></Link>
          <Link href="/" className="text-list"><li className="text-list"><h6>Contact Us</h6></li></Link>
          <Link href="/" className="text-list"><li className="text-list"><h6>About Us</h6></li></Link>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
