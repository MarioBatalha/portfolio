import React from "react";
import FadeIn from "react-fade-in";

import DeveloperImg from "../../assets/img/me.png";

import "./style.scss";

export const About = () => {
  return (
    <div className="about">
      <FadeIn>
        <div className="about-content">
          <div className="about-img">
            <img src={DeveloperImg} alt="developer" />
          </div>
          <div className="about-description">
            <h1>who am I ?</h1>
            <p>Software developer with some experience developing software that leaves a 
                positive impact on people, the environment, and before of all solving 
                problems with an intuitive solution.</p>
            <h1>what I do ?</h1>
            <p>As a developer, I have a mission to design and build a solution that improves the quality of life of a million people.</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
