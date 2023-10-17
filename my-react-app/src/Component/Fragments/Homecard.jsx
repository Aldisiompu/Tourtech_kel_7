

import React from 'react';

const products = [
  {
    id: 1,
    title:"Pantai Mutiara",
    desc: "Desa Gumanano, Kec. Mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 2,
    title:"Benteng Keraton",
    desc: "Bau Bau, Kel. Wolio",
    images: "/images/wisatalasaidewa2.png",
  },
  {
    id: 3,
    title:"Kampung Bajo",
    desc: "Kel. Watolo, Kec. Mawasangka",
    images: "/images/wisatabajo3.png",
  },
  
];

const Homecard = () => {
  return (
    <>
      {products.map((product) => (
        <div className="cardhome d-grid g-lg-1">
          <div className="cardhome-container " key={product.id}>
            <div className="text-center ">
              <img src={product.images} className='img-fluid' alt="Gambar Wisata" />
              <div className="cardhome-body">
                <h5 className="text-white fs-6 fw-semibold ">{product.title}</h5>
                <p className="text-white justify-content-center mt-1">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Homecard;
