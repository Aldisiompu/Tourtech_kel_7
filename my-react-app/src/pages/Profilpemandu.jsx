import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Pemanduimg from "../assets/pemanduimg.png";
import Pemanduimg1 from "../assets/img/pemandu/p1.jpg";
import Icontiktok from "/images/GambarFooter/icontiktok.png";
import Iconfb from "/images/GambarFooter/iconfb.png";
import Iconig from "/images/GambarFooter/iconig.png";
import Icontwiter from "/images/GambarFooter/icontwiter.png";
import back from "../assets/scrollleft.png";
import Button from "../Component/Elements/Buttons/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";

const Profilpemandu = () => {
  const [isVisible5, setIsVisible5] = useState(false);

  const handleScroll = () => {
    const element5 = document.querySelector(".animate-in-5");

    if (element5) {
      const elementTop5 = element5.getBoundingClientRect().top;
      setIsVisible5(elementTop5 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="profil  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Pemanduimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <Navbarcomponent></Navbarcomponent>
          <div className="d-flex justify-content-center align-items-center h-75 ">
            <h1 className="text-white fw-bold text-center w-50  ">
              Terbuka untuk kolaborasi dan percakapan yang menarik. jangan ragu
              untuk Hubungi saya!
            </h1>
          </div>
          <div className="text-profil text-center">
            <h2 className="fw-bold text-white">Profil Pemandu Wisata</h2>
          </div>
        </div>
        <div className="backdatapemandu d-flex justify-content-center align-items-center w-50  mt-5">
          <Link to="/datapemandu">
            <img src={back} alt="back" title="balik ke halaman data pemandu" />
          </Link>
        </div>
        <div
          className={`animate-in-5 ${
            isVisible5 ? "show" : ""
          } data-profil d-flex justify-content-center align-items-center gap-1 `}
          onClick={resetScroll}
        >
          <div className="foto-pemandu me-5">
            <img src={Pemanduimg1} alt="" />
          </div>
          <div className="data-pemandu">
            <div>
              <h6>NAMA LENGKAP</h6>
              <p>Dina</p>
            </div>
            <div>
              <h6>JENIS KELAMIN </h6>
              <p>Perempuan</p>
            </div>
            <div>
              <h6>KONTAK</h6>
              <p>082214536800</p>
            </div>
            <div>
              <h6>SOSIAL MEDIA</h6>
              <div className="d-flex medsos gap-3 mb-2">
                <Link to="http://www.tiktok.com/@tech.titans30">
                  <img src={Icontiktok} alt="" />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=61552141313707&mibextid=ZbWKwL">
                  <img src={Iconfb} alt="" />
                </Link>
                <Link to="https://instagram.com/titans4741?igshid=MzRlODBiNWFlZA==">
                  <img src={Iconig} alt="" />
                </Link>
                <Link to="#">
                  <img src={Icontwiter} alt="" />
                </Link>
              </div>
            </div>
            <Link to="#">
              <Button>Hubungi saya</Button>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-center mt-5 text-white fw-bold">
            Testimoni Wisatawan
          </h2>
        </div>

        <div className="carousel-container">
          <Container>
            <Carousel interval={null} pause={false}>
              <Carousel.Item className=" ">
                <div className="carousel-row d-flex justify-content-center align-items-center ">
                  <div className="carousel-element  ">
                    "Kami sangat beruntung memilih Dina sebagai tour guide kami
                    selama liburan kami di Buton Tengah. Dia juga sangat ramah
                    dan suka membantu.
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Terima kasih, Dina, atas pengalaman wisata yang luar biasa!
                    Dina mampu menjawab semua pertanyaan kami dan membuat
                    liburan kami di Buton Tengah menjadi tak terlupakan."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Kami sangat beruntung memilih Dina sebagai pemandu wisata
                    kami. Dia sangat ramah, membantu, dan memberikan wawasan
                    yang dalam tentang destinasi kami."
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-row ">
                  <div className="carousel-element">
                    "Dina adalah pemandu wisata yang luar biasa. Ia membuat
                    perjalanan kami menjadi lebih informatif dan menyenangkan.
                    Terima kasih atas pengalaman yang tak terlupakan, Dina!"
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Kunjungan kami ke Buton Tengah menjadi lebih berkesan
                    berkat Dina. Dina tidak hanya ahli dalam sejarah dan
                    destinasi, tapi juga sangat ramah dan responsif."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Dina adalah pemandu terbaik yang kami temui. Dia
                    menjelaskan sejarah dan destinasi kami dengan detail dan
                    gairah. Kami merasa sangat puas dengan panduan Dina."
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </div>
      <Footercomponent></Footercomponent>
    </>
  );
};

export default Profilpemandu;
