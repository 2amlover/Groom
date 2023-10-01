import React from "react";
import Pooja from "./funtabs/Pooja";
import Haldi from "./funtabs/Haldi";
import Mehendi from "./funtabs/Mehendi";
import Music from "./funtabs/Music";
import Wedding from "./funtabs/Wedding";
import Reception from "./funtabs/Reception";
import InviteFooter from "./funtabs/InviteFooter";
import backgroundImage from "../../../assets/funheader.png";

const Function = () => {
  return (
    <div>
      <h2
        className="text-decoration-underline fw-bold"
        style={{ color: "#ff3e6c", fontFamily: "fantasy" }}
      >
        - : Functions : -
      </h2>
      <div className="pooja mt-3">
        <Pooja />
      </div>
      <div className="haldi mt-5">
        <Haldi />
      </div>
      <div className="mehendi mt-5">
        <Mehendi />
      </div>
      <div className="music mt-5">
        <Music />
      </div>
      <div className="wedding mt-5">
        <Wedding />
      </div>
      <div className="reception mt-5">
        <Reception />
      </div>
      <div className="invite mt-4">
        <InviteFooter />
      </div>
    </div>
  );
};

export default Function;
