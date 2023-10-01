import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image1 from "../../assets/pw1.png";
// import Image2 from "../../assets/pw2.png";
// import Image3 from "../../assets/pw3.png";
import Carou1 from "./carousel/Carou1";
import Poster from "./poster/Poster";
import Carou2 from "./carousel/Carou2";
import SaveDate from "./savedate/SaveDate";
import Function from "./functions/Function";

const Bride = () => {
  return (
    <div>
      <div className="savedate">
        <SaveDate />
      </div>
      <div className="carou">
        <Carou2 />
      </div>
      <div className="poster mb-5">
        <Poster />
      </div>
      <div className="function">
        <Function />
      </div>
    </div>
  );
};

export default Bride;
