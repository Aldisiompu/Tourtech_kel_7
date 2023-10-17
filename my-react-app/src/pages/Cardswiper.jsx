import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Cardswipe = [
  {
    id: 1,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 2,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatalasaidewa2.png",
  },

  {
    id: 4,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 5,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 5,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 6,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
];

const Cardswipper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div>
          {Cardswipe.map((card) => (
            <SwiperSlide>
              <div className="card-swipe" key={card.id}>
                <img src={card.images} alt="Gambar Card" />
                <div className="card-body">
                  <h2 className="text-white fs-4 fw-bold">{card.title}</h2>
                  <p className=" fw-bolder text-white fs-6">{card.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Cardswipper;
