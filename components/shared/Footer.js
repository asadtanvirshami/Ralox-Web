import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#232529", padding: 15 }}>
      <MDBFooter className='footer-main text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/profile.php?id=100089048455736' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a> */}
          <a href='https://www.instagram.com/raloxsoft/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='linkedin.com/in/ralox-soft-3781a6262' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h2 className='text-uppercase fw-bold mb-4 Company_name'>
                {/* <MDBIcon icon="gem" className="me-3 Company_Name" /> */}
               <img src={"logo.png"} className="img-fluid" style={{height:70}}/>
              </h2>
              <p>
                Ralox Soft fully understands the difficulty of putting
                the responsibility and the future of your company in the hands
                of another; that is why we pour all our skills, time, and
                expertise into every single project we get.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 main-links'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <ul>
              <li>
                <Link href='#!' className='text-reset'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                  CRM & ERM Development
                </Link>
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                  Digital Marketing SEO&SMM
                </Link> 
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                 Recruitment
                </Link>
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                Graphic Designing
                </Link>
              </li>
              <li>
                <Link href='#!' className='text-reset'>
                Video Animation
                </Link>
              </li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 main-links'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              {/* <p>
                <Link href='#!' className='text-reset'>
                  Pricing
                </Link>
              </p> */}
              <p>
                <Link href='/tos' className='text-reset'>
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link href='/privacypolicy'  className='text-reset'>
                  Privacy Policy
                </Link>
              </p>
              {/* <p>
                <Link href='#!' className='text-reset'>
                  Portfolio
                </Link>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              {/* <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p> */}
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@raloxsoft.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 3361818434
              </p>
              <p>
                <MDBIcon icon="location-pin" className="me-3" /> Toronto,Canada
              </p>
              <p>
                <MDBIcon icon="location-pin" className="me-3" /> Karachi,Pakistan
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://raloxsoft.com/'>
         www.raloxsoft.com
        </a>
      </div>
    </MDBFooter>
    </footer>
  );
};

export default Footer;
