import { Container, Card, Row, Col, Image } from "react-bootstrap";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import vector from "../../assets/Vector.png";
import "./project.css";

function Project() {
  return (
    <div className="mt-5">
      <Container>
        <h1 style={{ color: "#000000" }} className="tes">
          More Projects
        </h1>
        <Row className="mt-5">
          <Col lg="4" md="6" sm="12">
            <Card style={{ width: "100%", marginTop: "20px" }}>
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title>
                  <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Medical Website
                  </h1>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <div
                  style={{
                    borderBottom: "3px solid #0099FF",
                    display: "inline-block",
                    paddingBottom: "5px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    Read More
                    <Image src={vector} style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card style={{ width: "100%", marginTop: "20px" }}>
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Cryptocurrency Website
                </h1>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <div
                  style={{
                    borderBottom: "3px solid #0099FF",
                    display: "inline-block",
                    paddingBottom: "5px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    Read More
                    <Image src={vector} style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card style={{ width: "100%", marginTop: "20px" }}>
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Title>
                  <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Cryptocurrency Website
                  </h1>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <div
                  style={{
                    borderBottom: "3px solid #0099FF",
                    display: "inline-block",
                    paddingBottom: "5px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    Read More
                    <Image src={vector} style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
