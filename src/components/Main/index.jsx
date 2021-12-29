import React from "react";
import { Navbar } from "../Navbar";
import FadeIn from "react-fade-in";

import "./style.scss";

export const Main = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <FadeIn>
          <h1>Software developer</h1>
          <p>Developer, UI Design and cryptocurrency enthusiast.</p>
        </FadeIn>
      </div>
    </div>
  );
};
