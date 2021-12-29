import React from "react";

import QRImage from "./../../assets/img/QR.png";

import "./style.scss";

export const Scan = () => {
  return (
    <div class="scan">
        <h2>
          Scan <br /> &Gotta Resume
        </h2>
        <p className="scan-subtitle">
          Check out my resume for more details about me
        </p>
        <img src={QRImage} alt="QR Code Resume" />
    </div>
  );
};
