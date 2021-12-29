import React, { useState, useEffect, useRef } from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';

import { links } from "../../data/Menu";
import "./style.scss";

const handleGetStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [theme, setTheme] = useState(handleGetStorageTheme());
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const handleToggleMenu = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo" onClick={() => scroll.scrollToTop()}>&lt;Mário Batalha /&gt;</h2>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, title } = link;
              return (
                <li key={id}>
                  <Link to={url} smooth={true} duration={1000}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-mode">
          <button className="button-mode" onClick={handleToggleTheme}>
            <FaLightbulb />
          </button>
          <button className="nav-toggle" onClick={handleToggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};
