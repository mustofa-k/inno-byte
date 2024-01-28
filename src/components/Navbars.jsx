import { useState } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ padding: "2%" }}
        className={`custom-navbar ${isMenuOpen ? "with-shadow" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">InnoByte</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleMenuToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="nav-link-spacing">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing">
                Services
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing">
                Portofolio
              </Nav.Link>
            </Nav>
            <button className="btn btn-primary" href="#contact">
              Contact
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
