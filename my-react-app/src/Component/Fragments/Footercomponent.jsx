import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gmbrhp from "/images/GambarFooter/iconhp.png";
import Gmbremail from "/images/GambarFooter/iconemail.png";
import Gmbrtiktok from "/images/GambarFooter/icontiktok.png";
import Gmbrfb from "/images/GambarFooter/iconfb.png";
import Gmbrig from "/images/GambarFooter/iconig.png";
import Gmbrtwiter from "/images/GambarFooter/icontwiter.png";

const Footercomponent = () => {
  return (
    <div>
      <footer className="footer  ">
        <Container>
          <Row>
            <Col md={2}>
              <div>
                <h3 className="mt-3 fw-bold">Tour Tech</h3>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h5>Tentang Kami</h5>
                <p>
                  Kami ingin para wisatawan yang ingin berkunjung di Buton
                  Tengah mendapatkan pengalaman berwisata yang menyenangkan dan
                  tidak terlupakan
                </p>
              </div>
              <div>
                <h5>Kontak Kami</h5>
                <div className="kontak">
                  <div className="d-flex gap-2">
                    <a href="">
                      <img src={Gmbrhp} alt="" />
                    </a>
                    <p>0210-1234567</p>
                  </div>
                  <div className="d-flex gap-2">
                    <a href="">
                      <img src={Gmbremail} alt="" />
                    </a>
                    <p>tourtech880@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="informasi lh-sm">
                <h5>Informasi</h5>

                <a href="#">
                  <p>Artikel</p>
                </a>
                <a href="#">
                  <p>Tentang kami</p>
                </a>
              </div>
              <div>
                <h5>Ikuti Kami</h5>
                <div className="ikutikami">
                  <a href="">
                    <img src={Gmbrtiktok} alt="" srcset="" />
                  </a>
                  <a href="">
                    <img src={Gmbrfb} alt="" srcset="" />
                  </a>
                  <a href="">
                    <img src={Gmbrig} alt="" srcset="" />
                  </a>
                  <a href="">
                    <img src={Gmbrtwiter} alt="" srcset="" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <h5>Pertanyaan</h5>
              <input type="text" placeholder="kirim email anda " />
              <button className="mt-3 rounded-1 btn-footer ">Kirim</button>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-4 ">
          Copyright &copy; 2023 Tech Titans.{" "}
        </div>
      </footer>
    </div>
  );
};

export default Footercomponent;
