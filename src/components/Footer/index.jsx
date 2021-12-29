import React from "react";
import { FaLinkedin, FaMedium, FaStackOverflow } from "react-icons/fa";
import "./style.scss";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p className="copyright">
        Copyright&copy; {year} All rights reserved to Mário Batalha
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/m%C3%A1rio-batalha-silva-5a4068180/" target='blank'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/14004075/m%c3%a1rio-batalha" target='blank'>
            <FaStackOverflow />
          </a>
        </li>
        <li>
          <a href="https://mariobatalha9.medium.com/" target='blank'>
            <FaMedium />
          </a>
        </li>
      </ul>
    </footer>
  );
};
