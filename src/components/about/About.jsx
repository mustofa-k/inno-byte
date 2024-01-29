import { Col, Container, Row, Image } from "react-bootstrap";
import "./About.css";
import Abouticon from "../../assets/about.png";

function About() {
  return (
    <div className="mt-5">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <Image
              src={Abouticon}
              fluid
              style={{ maxHeight: "100%", width: "100%" }}
            />
          </Col>
          <Col lg={6}>
            <h5>About US</h5>
            <h1>We are a creative agency</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec,
              luctus sapien vulputate urna tempor euismod adipiscing massa.
              Volutpat nunc quis dictum consectetur egestas varius.{" "}
            </p>
            <p className="mt-2">
              Ac sagittis tellus, sodales commodo elit, sociis purus. Egestas
              mauris eget commodo commodo et vel fermentum ultrice
            </p>
            <button className="button">More About us</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
