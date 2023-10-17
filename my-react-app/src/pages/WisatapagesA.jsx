import Navbarwisata from "../Component/Fragments/Navbarwisata";
import bgimage from "../assets/img/wisata/wisataA/background.png"
import Square1 from "../assets/img/wisata/wisataA/Square1.png"
import Square2 from "../assets/img/wisata/wisataA/Square2.png"
import Square3 from "../assets/img/wisata/wisataA/Square3.png"
import Picture1 from "../assets/img/wisata/wisataA/pic1.png"
import Picture2 from "../assets/img/wisata/wisataA/pic2.png"
import Picture3 from "../assets/img/wisata/wisataA/pic3.png"
import num1 from "../assets/img/wisata/wisataA/01.png"
import num2 from "../assets/img/wisata/wisataA/02.png"
import num3 from "../assets/img/wisata/wisataA/03.png"
import React from 'react';
import Footercomponent from "../Component/Fragments/Footercomponent";

const WisatapagesA = () => {
    return (
      <div id="background" style={{ backgroundColor: '#404040' }}>
        <div
          className="bg-image img-fluid"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '120vh',
            fontFamily: 'Times New Roman',
          }}
        >
          <Navbarwisata />
          <div
            className="header-text"
            style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
          >
            <div style={{marginTop:'100px', marginLeft: '100px', marginBottom: '0' }} className="text-center text-light">
              <h1 style={{ marginBottom: '0', fontSize: '60px', fontWeight: '700' }}>Eksplorasi</h1>
              <h1 style={{ marginBottom: '0', fontSize: '60px', fontWeight: '700' }}>Keindahan Alam</h1>
              <h1 style={{ marginBottom: '0', fontSize: '60px', fontWeight: '700' }}>Buton Tengah</h1>
            </div>
          </div>
          <div style={{ marginRight: '50px' }}>
            <div className="d-flex flex-column align-items-end">
              <p className="mb-0 text-light fs-4 fw-bolder">POPULER</p>
              <hr className="text-light" style={{ borderWidth: '2px', width: '200px' }} />
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <div className="custom-img">
                <a href="#Penjelasan3">
                  <img className="me-2 img-fluid" src={Square1} alt="Square 1" />
                </a>
                <a href="#Penjelasan1">
                  <img className="me-2 img-fluid" src={Square2} alt="Square 2" />
                </a>
                <a href="#Penjelasan2">
                  <img className="img-fluid" src={Square3} alt="Square 3" />
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Tillana', marginLeft: '130px', marginTop: '120px', lineHeight: '5px' }} className="text-light text-center">
                <p>"Lupakan kepenatan sehari-hari, dan jadikan liburan alam sebagai pelukan nyaman yang akan Anda</p>
                <p>kenang seumur hidup."</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-image img-fluid"
          style={{
            background: 'linear-gradient(180deg, rgba(204.85, 187.42, 174.81, 0), rgba(11.25, 75.76, 113.48, 0.72))',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '250vh',
            fontFamily: 'Times New Roman',
          }}
        >
          <section id="Penjelasan1">
            <div style={{ paddingTop: '150px' }} className="d-flex align-items-center justify-content-around">
              <div className="text-light text-end">
                <div className="d-flex align-items-end justify-content-between">
                  <img className="img-fluid" src={num1} alt="Number 1" />
                  <h1 style={{ textAlign: 'right' }}>Pantai Mutiara</h1>
                </div>
                <hr style={{ borderWidth: '3px' }} />
                <p style={{ textAlign: 'justify', width: '590px' }}>
                  Pantai Mutiara diresmikan dan dibuka untuk umum di tahun 2015. Tepatnya terletak di desa terpencil Gumanano, Sulawesi Tenggara. Pantai ini terkenal dengan warna pasir putihnya yang dipadukan dengan warna laut yang hijau kebiruan sehingga tampak seperti pantai di surga.
                  Pantulan dari matahari yang bersinar semakin menambah indah pantai ini karena tampak berkilauan. Di sini, wisatawan dapat bermain-main dengan air serta berenang. Aktivitas menjaring ikan oleh nelayan setempat juga dapat ditemui di pantai ini.
                  Pantai ini pun masih bersih dan alami. Jarang sekali sampah ditemui di tempat ini. Berkunjung ke pantai ini bisa menjadi media relaksasi kala penat datang menyapa
                </p>
              </div>
              <div>
                <img className="img-fluid" src={Picture1} alt="Picture 1" />
              </div>
            </div>
          </section>
          <section id="Penjelasan2">
            <div style={{ paddingTop: '150px' }} className="d-flex align-items-center justify-content-around flex-row-reverse">
              <div className="text-light text-end">
                <div className="d-flex align-items-end justify-content-between">
                  <h1 style={{ textAlign: 'right' }}>Danau Anano Tei</h1>
                  <img className="img-fluid" src={num2} alt="Number 2" />
                </div>
                <hr style={{ borderWidth: '3px' }} />
                <p style={{ textAlign: 'justify', width: '590px' }}>
                  Buton Tengah memiliki banyak destinasi wisata alam yang mengagumkan. Salah satunya adalah Danau Anano Tei. Keindahan danau ini terletak pada hutan bakau yang menghiasi sudut-sudutnya.
                  Nama Anano Tei sendiri diambil dari bahasa setempat yang berarti "anaknya pantai". Berbeda dengan danau lain, Danau Anano Tei memiliki air yang asin. Pasalnya, lokasi danau ini berdekatan dengan laut.
                  Danau Anano Tei ini tepatnya di Kelurahan Gumamano, Kecamatan Mawasangka. Jaraknya dekat dengan kawasan wisata Pantai Mutiara Buteng menjadikan Danau Anano Tei sebagai wisata alam wajib usai berkunjung ke Pantai Mutiara Buteng.
                </p>
              </div>
              <div>
                <img className="img-fluid" src={Picture2} alt="Picture 2" />
              </div>
            </div>
          </section>
          <section id="Penjelasan3">
            <div style={{ paddingTop: '150px' }} className="d-flex align-items-center justify-content-around">
              <div className="text-light text-end">
                <div className="d-flex align-items-end justify-content-between">
                  <h1 style={{ textAlign: 'right' }}>Pantai Katambe</h1>
                  <img className="img-fluid" src={num3} alt="Number 3" />
                </div>
                <hr style={{ borderWidth: '3px' }} />
                <p style={{ textAlign: 'justify', width: '590px' }}>
                  Pantai Katambe di Kabupaten Buton Tengah menyuguhkan panorama pasir putih dan hamparan laut biru.
                  Pantai ini tepatnya berlokasi di Desa Madongka, Kecamatan Lakudo, Kabupaten Buton Tengah (Buteng), Sulawesi Tenggara.
                  Saat berkunjung ke pantai ini, anda disambut hamparan pasir putih, akan Anda temui sejak masuk menuju pantai. Bentangan pantai yang cukup luas ini membuat wisatawan dapat leluasa beraktivitas didalamnya.
                  Seperti bermain volley ball, membangun camping ground hingga bermain sepak bola.
                </p>
              </div>
              <div>
                <img className="img-fluid" src={Picture3} alt="Picture 3" />
              </div>
            </div>
          </section>
        </div>
        <Footercomponent/>
      </div>
    );
  };
  
  export default WisatapagesA;