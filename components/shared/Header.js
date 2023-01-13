import React,{useEffect,useState,useRef} from "react";
import Image from "next/image";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const listenToScroll = () => {
  //     if (window.pageYOffset > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => window.removeEventListener("scroll", listenToScroll);
  // }, []);
  // className={scrolled? "header-shrink":"nav-container"}
  // className={scrolled? "page-links-lg px-3":"page-links-sm px-3"}

  return (
    <>
      <Navbar collapseOnSelect expand="md px-2"  className={scrolled? "header-shrink":"nav-container"} >
        <Navbar.Brand className="header_brand">
        <img src={"logo.png"} className="img-fluid" style={{height:30}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            className="offcanvas-body-lg"
          >
            <Offcanvas.Header className="mb-2" closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className="justify-content-center flex-grow-1 pe-1 ">
                <Nav.Link href="/" className="page-links-lg px-3">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="page-links-lg px-3">
                  About Us
                </Nav.Link>
                <Nav.Link href="/" className="page-links-lg px-3">
                  Services
                </Nav.Link>
                <Nav.Link href="/" className="page-links-lg px-3">
                  Industries
                </Nav.Link>
              </Nav>
              <div style={{}}>
                <Button href="/contact" className="btn-sm">
                  Contact Us
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
