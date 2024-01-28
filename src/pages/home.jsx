import Navbars from "../components/Navbars";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./home.css";
import homeicon from "../assets/Home.png";

function Home() {
  return (
    <>
      <Navbars />
      <Container>
        <Row>
          <Col lg={6} sm={6} style={{marginTop:"15%"}}>
            <h1 className="custom-heading">
              We are the best agency in the world
            </h1>
            <p style={{ width: "88%" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button
              className="btn btn-primary"
              style={{ padding: "10px 30px" }}
            >
              Start a Project
            </button>
            <button
              className="btn btn-light"
              style={{
                padding: "10px 30px",
                margin: "10px",
                border: "1px solid #0099FF",
                color: "#0099FF",
              }}
            >
              Learn More
            </button>
          </Col>
          <Col lg={6} sm={6}>
            <Image
              src={homeicon}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
