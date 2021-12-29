import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

import AskMe from "./../../assets/img/askme.png";
import ColorGenerator from "./../../assets/img/color-generate.png";
import Cocktails from "../../assets/img/cocktails.png";
import Contentribe from "./../../assets/img/contentribe.png";
import Food from "./../../assets/img/food.png";
import BeTheHero from './../../assets/img/be-the-hero.png';
import Happy from './../../assets/img/happy.png';
import Proffy from './../../assets//img/proffy.png';
import GamePlay from './../../assets//img/game-play.png';

import "./style.scss";
import { Image } from "./../Image";

 const images = [
  Food,
  AskMe,
  ColorGenerator,
  Cocktails,
  Contentribe,
  BeTheHero,
  Happy,
  Proffy,
  GamePlay,
];


export const Cases = () => {
  const [items] = useState(images);
  return (
    <div className="cases">
      <h1>Cases</h1>
      <div className="carousel-wrapper">
        <Carousel>
            {items.map((item, index) => {
               return (
                   <div className="carousel">
                        <Image src={item} key={index} alt={item} />
                   </div>
               )
            })}
        </Carousel>
      </div>
    </div>
  );
};
