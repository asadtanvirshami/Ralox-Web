import React from "react";
import Image from "next/Image";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../../public/logo hail.png";

export const Header = () => {
  return (
    <>
     
        <Navbar collapseOnSelect expand="sm" >
          <Container>
            <Navbar.Brand>
              <Image src={Logo} width={200} height={60} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container className="nav_container">
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
                    <Nav className="justify-content-center flex-grow-1 pe-3 mx-2">
                      <Nav.Link href="/" className="page-links">
                        Home
                      </Nav.Link>
                      <Nav.Link href="/about" className="page-links">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="/services" className="page-links">
                        Services
                      </Nav.Link>
                      <Nav.Link href="/clients" className="page-links">
                        Our Clients
                      </Nav.Link>
                    </Nav>
                    <div style={{}}>
                      <Button className="contact_btn">Contact Us</Button>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
    </>
  );
};
export default Header;
