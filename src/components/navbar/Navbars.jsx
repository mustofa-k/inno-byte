import { useState } from "react";
import "./navbar.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoInno from "../../assets/inno.png";

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
          <Navbar.Brand href="#home"><img className="logo" src={logoInno} alt="logo inno" /></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleMenuToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="nav-link-spacing fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing fw-bold">
                Services
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing fw-bold">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link-spacing fw-bold">
                Portofolio
              </Nav.Link>
            </Nav>
            <button className="button" href="#contact">
              Contact
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
