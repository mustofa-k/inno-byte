import { Col, Row } from "react-bootstrap";
import "./services.css";
import speed from "../../assets/speed.svg";
import mudah from "../../assets/mudah.svg";
import templates from "../../assets/templates.png";
import layanan from "../../assets/layanan.png";

function Services() {
  return (
    <div>
      <div className="services container-fluid pb-5">
        <div className="content container text-center mt-5">
          <div className="header">
            Mengapa Harus Membuat Website di Inno-byte solution?
          </div>
        </div>
        <div className="container mt-5">
          <Row className="mt-5">
            <Col
              md={6}
              lg={3}
              className="mt-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
            >
              <div className="cart bg-white text-center p-2">
                <div className="d-flex justify-content-center">
                  <div className="img-services mt-4">
                    <img src={speed} alt="" />
                  </div>
                </div>
                <p className="mt-5 title">Cepat</p>
                <p className="mt-3 desc">
                  Sudah tidak berlaku lagi membuat website dengan waktu yang
                  lama, Inno-byte akan mengerjakan dengan cepat website atau
                  aplikasi kamu,
                </p>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}
              className="mt-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
            >
              <div className="cart bg-white text-center p-2">
                <div className="d-flex justify-content-center">
                  <div className="img-services mt-4">
                    <img src={mudah} alt="" />
                  </div>
                </div>
                <p className="mt-5 title">Murah</p>
                <p className="mt-3 desc">
                  kamu bisa membuat website kamu mulai dari Rp.600.000
                </p>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}
              className="mt-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
            >
              <div className="cart bg-white text-center p-2">
                <div className="d-flex justify-content-center">
                  <div className="img-services mt-4">
                    <img src={templates} alt="" />
                  </div>
                </div>
                <p className="mt-5 title">Custom Tampilan</p>
                <p className="mt-3 desc">
                  Bosan dengan template yang sama atau tampilan gitu gitu aja?
                  Tenang, Inno-byte bisa custom tampilan sesuai dengan kebutuhan
                  kamu
                </p>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}
              className="mt-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
            >
              <div className="cart bg-white text-center p-2">
                <div className="d-flex justify-content-center">
                  <div className="img-services mt-4">
                    <img src={layanan} alt="" />
                  </div>
                </div>
                <p className="mt-5 title">Layanan 24/7</p>
                <p className="mt-3 desc">
                  kamu bisa consultasi sebelum memesan website atau aplikasi
                  kamu
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
