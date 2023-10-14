import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import image1 from '../../assets/img/wisata/wisataS/benteng1.png';
import image2 from '../../assets/img/wisata/wisataS/benteng2.png';
import image3 from '../../assets/img/wisata/wisataS/benteng3.png';
import image4 from '../../assets/img/wisata/wisataS/benteng4.png';
import '../../style.css';

function CarouselWS2() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: '40%', position:'absolute', marginRight:'15rem'}}>
        <Carousel>
          <Carousel.Item>
            <img src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselWS2;
