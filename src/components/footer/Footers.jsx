import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";


function Footers() {
  return (
    <div className="mt-5 footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12" className="mt-lg-4 mt-md-4 mt-sm-4 mt-4">
            <p className="bold-menu">Inno Byte</p>
            <p style={{width:"280px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              voluptates reiciendis sed iure at excepturi earum ratione harum
              natus sit labore,
            </p>
            <div className="d-flex mt-3">
              <FontAwesomeIcon
                icon={faFacebook}
                className="mx-1"
                style={{ height: "25px" }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="mx-1"
                style={{ height: "25px" }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="mx-1"
                style={{ height: "25px" }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mx-1"
                style={{ height: "25px" }}
              />
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" className="mt-lg-4 mt-md-4 mt-sm-4 mt-4">
            <div className="bold-menu">Menu</div>
            <div className="mt-2">
              <a href="/" className="footer-link">
                Home
              </a>
            </div>
            <div className="mt-2">
              <a href="/about" className="footer-link">
                About Us
              </a>
            </div>
            <div className="mt-2">
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </div>
            <div className="mt-2">
              <a href="/projects" className="footer-link">
                Projects
              </a>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" className="mt-lg-4 mt-md-4 mt-sm-4 mt-4 custom-margin">
            <div className="bold-menu">Services</div>
            <div className="mt-2">
              <a href="/services" className="footer-link">
                Web Development
              </a>
            </div>
            <div className="mt-2">
              <a href="/services" className="footer-link">
                Mobile App Development
              </a>
            </div>
            <div className="mt-2">
              <a href="/services" className="footer-link">
                UI/UX Design
              </a>
            </div>
            <div className="mt-2">
              <a href="/services" className="footer-link">
                Digital Marketing
              </a>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" className="mt-lg-4 mt-md-4 mt-sm-4 mt-4">
            <div className="bold-menu">Contact Us</div>
            <div className="mt-2">
              <p>Email: info@innobyte.com</p>
            </div>
            <div className="mt-2">
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="mt-2">
              <p>Address: 123 Street, City, Country</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footers;
