import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    // #################### TOP HEADER ######################

    <Navbar style={{backgroundColor:'#0a9a73',margin:"0",padding:"0"}} variant="light" expand="lg">
      {/* <Container > */}
        <Navbar.Brand href="#home"style={{color:'white',paddingRight:'19px',fontSize:'13px',fontWeight:'bold'}}>
          <i className="fas fa-map-marker-alt"></i> HEAD OFFICE : KANNUR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{color:'white',paddingRight:'19px',fontSize:'13px',fontWeight:'bold'}}>
              <i className="fas fa-phone"></i>&nbsp;&nbsp; 8234526178
            </Nav.Link>
            <Nav.Link href="#link"style={{color:'white',paddingRight:'19px',fontSize:'13px',fontWeight:'bold'}}>
              <i className="fas fa-envelope"></i>&nbsp;&nbsp;DLabs@gmail.com
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"style={{color:'white',fontSize:'13px'}}>
              <i className="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="#"style={{color:'white',fontSize:'13px'}}>
              <i className="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="#"style={{color:'white',fontSize:'13px'}}>
              <i className="fab fa-whatsapp"></i>
            </Nav.Link>
            <Nav.Link href="#"style={{color:'white',fontSize:'13px'}}>
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#"style={{color:'white',fontSize:'13px'}}>
              <i className="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Header;

