import { Col, Row } from "react-bootstrap";
import "./services.css";
import pemrogramman from "../../assets/programming.png";
import UI from "../../assets/UI.png";
import group from "../../assets/group.png";
import seo from "../../assets/seo.png";

function Services() {
  return (
    <div>
      <div className="services container-fluid">
        <div className="content text-center">
          <h5 className="fw-bold pt-5">Services</h5>
          <div className="header">We Provide</div>
          <div className="justify-content-center d-flex">
            <p className="desc text-center">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              quam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sed, quas!
            </p>
          </div>
        </div>
        <div className="container text-center">
          <Row className="mt-4">
            <Col md={3} className="mb-3 mb-md-0">
              <div className="cart bg-white pt-5 pb-5">
                <div>
                  <img src={pemrogramman} alt="" />
                </div>
                <h2 className="mt-3">Web Design</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, nulla.
                </p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="cart bg-white pt-5 pb-5">
                <div>
                  <img src={UI} alt="" />
                </div>
                <h2 className="mt-3">Web Design</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, nulla.
                </p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="cart bg-white pt-5 pb-5">
                <div>
                  <img src={group} alt="" />
                </div>
                <h2 className="mt-3">Web Design</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, nulla.
                </p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="cart bg-white pt-5 pb-5">
                <div>
                  <img src={seo} alt="" />
                </div>
                <h2 className="mt-3">Web Design</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, nulla.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Services;
