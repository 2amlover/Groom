import React from "react";
import MusicImage from "../../../../assets/dance.png";

const Music = () => {
  const imageSize = {
    maxHeight: "180px", // Set the maximum height (adjust this value as needed)
  };

  return (
    <div>
      <img src={MusicImage} alt="" style={imageSize} />
      <div className="card border-warning mb-2 mt-2 rounded-0" style={{ maxWidth: '18rem', marginLeft: '17px' }}>
      <div className="card-body text-start p-2">
        <h5 className="names">Sangeeth</h5>
        <p className="card-text mb-1">October 17, 2023, Thursday</p>
        <p className="card-text mb-1">06:30 PM</p>
        <p className="card-text mb-2">Venue: Groom's Residence</p>
        <button className="button">View Map</button>
      </div>
    </div>
    </div>
  );
};

export default Music;
