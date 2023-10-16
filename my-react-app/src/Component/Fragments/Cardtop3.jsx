import React from 'react';
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    desc: "Ika Purnama Sari",
    images: "/images/ika.jpg",
  },
  {
    id: 2,
    desc: "Mila",
    images: "/images/mila.jpg",
  },
  {
    id: 3,
    desc: "Dina Nurul Fauziyah",
    images: "/images/dina1.jpg",
  },
  
];

const Cardtop3 = () => {
  return (
    <>
      {products.map((product) => (
        <div className="kartu d-grid gap-3">
          <div className="kartu-container " key={product.id}>
            <div className="text-center ">
              <Link to="/wisata"><img src={product.images} className='img-fluid' alt="Gambar Pemandu" /></Link>
              <div className="kartu-body">
                <p className="text-black justify-content-center fw-semibold fs-6 mt-3">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardtop3;