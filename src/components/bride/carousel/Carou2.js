import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from "../../../assets/carousel-1.png";
import Image2 from "../../../assets/carousel-2.png";
import Image3 from "../../../assets/carousel-3.png";

const Carou2 = () => {
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    // borderRadius: '10px', // Add border radius to images
  };

  return (
    <div>
      {/* <div className="card bg-warning text-dark">
        <div className="card-body">
          <h2 className="card-title fw-bold">Bride To Be</h2>
        </div>
      </div> */}

      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        transitionTime={300}
        transitionTimeUnit="ms"
      >
        <div>
          <img src={Image1} alt="Image 1" style={imageStyle} />
        </div>
        <div>
          <img src={Image2} alt="Image 2" style={imageStyle} />
        </div>
        <div>
          <img src={Image3} alt="Image 3" style={imageStyle} />
        </div>
        <div>
          <img src={Image1} alt="Image 4" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carou2;
