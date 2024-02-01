import { Container, Col, Row, Image } from "react-bootstrap";
import "./hero.css";
import homeicon from "../../assets/home.png";

function Hero() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} sm={6} style={{ marginTop: "10%" }}>
            <h1 className="custom-heading">
              Solusi Website Premium dengan Kualitas Terbaik!
            </h1>
            <div className="d-flex mt-2">
              <h1>
                Mulai dari Harga <p className="harga">Rp 600.000</p>
              </h1>
            </div>
            <p className="mt-1 w-75">
              Berkarya dengan Gaya, Bangun Online Presence Anda yang Luar Biasa!
              Jangan Ketinggalan, Wujudkan Website Impian Anda Sekarang
            </p>

            <button className="button" style={{ padding: "10px 30px" }}>
              Consultasi sekarang
            </button>
            {/* <button
              className="btn btn-light"
              style={{
                padding: "10px 30px",
                margin: "10px",
                border: "1px solid #0099FF",
                color: "#0099FF",
              }}
            >
              Learn More
            </button> */}
          </Col>
          <Col lg={6} sm={6} style={{ marginTop: "5%" }}>
            <Image
              src={homeicon}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
