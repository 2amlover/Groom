import React from "react";
import PoojaImage from "../../../../assets/pooja.png";
import "./pooja.css"; // Import a CSS file for styling

const Pooja = () => {
  return (
    <div className="pooja-container">
      <img src={PoojaImage} alt="" className="pooja-image" />
      <div className="card border-warning mb-2 mt-2 rounded-0 pooja-card">
        <div className="card-body text-start p-2">
          <h5 className="names">Pooja</h5>
          <p className="card-text mb-1">October 15, 2023, Tuesday</p>
          <p className="card-text mb-1">11:30 AM</p>
          <p className="card-text mb-2">Venue: Groom's Residence</p>
          <button className="button">View Map</button>
        </div>
      </div>
    </div>
  );
};

export default Pooja;
