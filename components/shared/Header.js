import React from "react";
import Image from 'next/image'
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../../public/logo hail.png";

export const Header = () => {
  return (
    <>
     
        <Navbar collapseOnSelect expand="md mx-2" style={{}} >
    
            <Navbar.Brand className="" >
              <Image src={Logo} width={200} height={60} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Collapse id="responsive-navbar-nav">
   
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-`}
                  aria-labelledby={`offcanvasNavbarLabel-expand`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand`}
                    >
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-1 " >
                      <Nav.Link href="/" className="page-links px-3">
                        Home
                      </Nav.Link>
                      <Nav.Link href="/about" className="page-links px-3">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="/services" className="page-links px-3">
                        Services
                      </Nav.Link>
                      <Nav.Link href="/clients" className="page-links px-3">
                        Our Clients
                      </Nav.Link>
                    </Nav>
                    <div style={{}}>
                      <Button href="/contact" className="contact_btn">Contact Us</Button>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
            
            </Navbar.Collapse>
    
        </Navbar>
   
    </>
  );
};
export default Header;
