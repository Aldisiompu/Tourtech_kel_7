import Navbarnew from "../Component/Fragments/Navbarnew";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/Testimonipages.css'

const Testimonipages = () => {
  return (
    <div className="">
      <div className="navbar-banner">
        <Navbarnew />
        <div className="banner-content">
          <div className="banner-text">kisah sukses pelanggan</div>
        </div>
      </div>
      <div className="cards">
        <h2 className="text-cards">"Apa Kata Mereka ?"</h2>
      </div>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide-content">
              <p>"Saya baru saja kembali dari liburan luar biasa di Buton Tengah .
                Pulau ini benar-benar surganya wisatawan! Pantai-pantai yang indah,
                budaya yang kaya, dan makanan lezat membuat pengalaman ini tak terlupakan.
                Saya pasti akan kembali lagi suatu hari."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <p> "Pelayanan tour guide yang diberikan adalah pemandu yang sangat berpengetahuan dan penuh semangat. Dia menjelaskan sejarah dan cerita menarik tentang setiap tempat yang kami kunjungi di Buton Tengah. Pemandu juga memberikan rekomendasi restoran yang luar biasa di seluruh perjalanan. Kami merasa sangat beruntung telah memilih Tour Tech sebagai pemandu wisata kami."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <p>"Saya ingin berterima kasih kepada tour guide kami, yang membuat perjalanan kami begitu berkesan. Dia sangat berpengetahuan tentang sejarah dan budaya destinasi kami dan mampu menjelaskannya dengan cara yang menarik. Pemandu wisata juga sangat perhatian terhadap kebutuhan kami dan memberikan rekomendasi makanan yang luar biasa. “</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <p>"Saya ingin berterima kasih kepada tour guide kami, yang membuat perjalanan kami begitu berkesan. Dia sangat berpengetahuan tentang sejarah dan budaya destinasi kami dan mampu menjelaskannya dengan cara yang menarik. Pemandu wisata juga sangat perhatian terhadap kebutuhan kami dan memberikan rekomendasi makanan yang luar biasa. “</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="feedback-card">
        <h2>Kirim Ulasan</h2>
        <form>
          <textarea id="feedback" name="feedback" rows="10" cols="50" placeholder="Masukkan ulasan disini"></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <h3 className="brand-footer">Tour Tech</h3>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3 >Tentang Kami</h3>
            <p>
              Kami ingin para wisatawan yang ingin berkunjung ke Buton Tengah mendapatkan pengalaman berwisata yang menyenangkan dan tidak terlupakan
            </p>
            <br></br>
            <h3>Kontak</h3>
            <p><FaRegEnvelope /> techtour880@gmail.com</p>
            <p><FaPhoneAlt /> (123) 456-7890</p>
          </div>
          <div className="footer-column">
            <h3>Informasi</h3>
            <p>Artikel</p>
            <p>Tentang Kami</p>
            <br />
            <h3>Ikuti Kami</h3>
            <div className="social-media-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Pertanyaan</h3>
            <form>
              <textarea
                id="question"
                name="question"
                rows="1"
                cols="50"
                placeholder="Masukkan Email Anda"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </footer >
      <div className="copyright">
        &copy; 2023 Tour Tech
      </div>
    </div >
  );
}
export default Testimonipages;