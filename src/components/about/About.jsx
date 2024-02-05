import { Col, Container, Row, Image } from "react-bootstrap";
import "./About.css";
import Abouticon from "../../assets/about.png";

function About() {
  return (
    <div className="mt-5">
      <Container className="about">
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <Image src={Abouticon} fluid style={{ maxHeight: "100%", width: "100%" }} />
          </Col>
          <Col lg={6}>
            <div className="header">About US</div>

            <p className="mt-4">
              Inno-Byte Solution adalah penyedia layanan terkemuka dalam pembuatan website dan aplikasi mobile. Dengan fokus pada inovasi dan kualitas, kami menawarkan solusi teknologi terdepan yang sesuai dengan kebutuhan bisnis Anda. Tim
              ahli kami menggabungkan kreativitas dengan keahlian teknis untuk menghasilkan produk yang menarik dan responsif.
            </p>
            <p className="mt-2">
              Kami tidak hanya menyediakan desain yang menawan, tetapi juga memastikan pengalaman pengguna yang mulus dan intuitif. Pendekatan kami berorientasi pada kebutuhan Anda, bekerja sama untuk memahami visi dan tujuan bisnis Anda
              sehingga kami dapat memberikan solusi yang sesuai dan memberikan nilai tambah yang signifikan. Dengan reputasi yang kuat di industri ini, Inno-Byte Solution adalah mitra yang dapat diandalkan untuk membantu Anda memenangkan
              persaingan di pasar digital yang kompetitif.
            </p>
            <button className="button">More About us</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
