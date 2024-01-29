// Add these imports at the top of your file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Container, Row, Image } from "react-bootstrap";
import "./team.css";
import seo from "../../assets/people.jpg";
import seo1 from "../../assets/people1.jpg";
import seo2 from "../../assets/people2.jpg";
import seo3 from "../../assets/people3.jpg";

function Team() {
  return (
    <div className="team mt-5">
      <Container>
        <h5 className="text-center pt-5">Meet Our Team</h5>
        <h1 className="text-center pt-2">Our Expert Members</h1>
        <p className="text-center pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Diam vivamus pretium maecenas amet.
        </p>
        <Row>
          <Col lg="3" md="6" sm="12" xs="12">
            <Image src={seo} fluid className="team-member-image" />
            <div className="hello">
              <div className="d-flex">
                <Image />
                {/* Add social media icons here */}
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </div>
              <h1 className="pt-2" style={{ fontSize: "20px" }}>Jane Cooper</h1>
              <p>Developer</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" xs="12">
            <Image src={seo1} fluid className="team-member-image" />
            <div className="hello">
              <div className="d-flex">
                <Image />
                {/* Add social media icons here */}
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </div>
              <h1 className="pt-2" style={{ fontSize: "20px" }}>Jane Cooper</h1>
              <p>Developer</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" xs="12">
            <Image src={seo2} fluid className="team-member-image" />
            <div className="hello">
              <div className="d-flex">
                <Image />
                {/* Add social media icons here */}
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </div>
              <h1 className="pt-2" style={{ fontSize: "20px" }}>Jane Cooper</h1>
              <p>Developer</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12" xs="12">
            <Image src={seo3} fluid className="team-member-image" />
            <div className="hello">
              <div className="d-flex">
                <Image />
                {/* Add social media icons here */}
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </div>
              <h1 style={{ fontSize: "20px" }} className="pt-2">Jane Cooper</h1>
              <p>Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Team;
