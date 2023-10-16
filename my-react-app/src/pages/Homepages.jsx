import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Homecard from "../Component/Fragments/Homecard";
import { Container, Row, Col, CardBody } from "react-bootstrap";
import Bgimage from "../assets/bghome.png";
import React from "react";
import Strengthcard from "../Component/Fragments/Strengthcard";
import Cardtop3 from "../Component/Fragments/Cardtop3";
import AboutCard from "../Component/Fragments/AboutCard";
import Footercomponent from "../Component/Fragments/Footercomponent";


const Homepages = () => {
  return (
    <div div className="Home">
    <div>
    <div className=" bg-secondary h-vh-100">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Navbarwisata />
        <Container className=" hero d-flex justify-content-center align-items-center h-100 "> 
            <Row className="my-auto gap-4">
              <Col className="text-white" md={6}>
                <h1 className="fw-bold fs-1">BUTON TENGAH</h1>
                <h4 className="fs-5">NEGERI 1000 GUA</h4>
                <p className="text-justify-start d-none d-sm-block">
                  Disinilah Petualangan sejati dimulai. Selamat datang di portal
                  ekslusif kami yang menggabungkan kekayaan budaya, keindahan
                  alam dan kenangan sejarah yang tak terlupakan dalam satu
                  perjalanan epik. Dengan kami, Anda akan menjelajah tiga dimensi
                  yang memukau diantaranya kekayaan budaya yang ajaib, keindahan
                  alam yang menakjubkan, kenangan sejarah yang abadi.
                </p>
              </Col>
              <Col>
              <div className="row  row-cols-3 row-cols-md-3 g-3" > 
              <Homecard></Homecard>
              </div>
              </Col>
            </Row>
          </Container>
        </div>

           <div className="Strength  h-vh-100">
            <div className="bg-image"
            style={{
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center",
            height:"100vh",
            }}>

              <div style={{paddingTop: '50px', lineHeight:'4px'}} className="text-center text-light">
                 <h1 className="mb-3 text-center fw-bold fs-3 text-black">MENGAPA MEMILIH KAMI?</h1>
                 <div className="d-flex flex-row d-grid gap-3 justify-content-center">
                  <Strengthcard></Strengthcard>
                </div>
              </div>
            </div>
          </div>
          
            <div className="bg-image"
            style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
            }}>
           <div style={{paddingTop: '50px', lineHeight:'4px'}} className=" toppemandu min-vh-100 text-center ">
                <h1 className=" text-white  fw-bold fs-4 mb-4">TOP 3 PEMANDU WISATA</h1>
                <div className="d-flex flex-row d-grid gap-3 justify-content-center">
                  <Cardtop3></Cardtop3>
                </div>
           </div>
         </div>

            {/* Halaman about */}
            <div className="about  container-fluid py-5">
              <div className="bg-image"
                style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100vh",
                }}>  
                  <div className=" about-container min-vh-100 text-center">
                      <h2 className="text-center fw-bold fs-3 text-white">TENTANG TOUR TECH</h2>
                      <p className=" text-justify-center text-white mx-auto d-none d-sm-block mt-3 ">Tour Tech adalah bisnis usaha yang bergerak di bidang jasa pemandu wisata dan didirikan pada tahun 2023 oleh Tim Tech Titan. Dengan pemenuhan kebutuhan dari hasil penelitian kami, kami menyadari bahwa banyak wisatawan mencari pengalaman yang lebih mendalam dan berarti saat mengunjungi wisata yang ada di buton tengah. Mereka tertarik untuk menjelajahi aspek budaya, sejarah, dan keindahan alam dari suatu tempat, bukan hanya destinasi yang populer. Maka dari itu kami menyarankan untuk penyediaan layanan pemandu yang akan menjadi sumber utama bagi pengguna yang ingin merencanakan perjalanan dengan fokus pada budaya, sejarah, dan alam suatu destinasi yang ada di buton tengah dengan permintaan masyarakat telah mendorong kami untuk menjadi bagian bisnis pemandu wisata.</p>
                      <div className="d-flex flex-row d-grid gap-3 justify-content-center">
                  <AboutCard></AboutCard>
                </div>
                </div>
              </div>
            </div>
      </div>
      <Footercomponent></Footercomponent>
    </div>
    </div>
  );
};


export default Homepages;
