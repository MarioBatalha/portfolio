import React from "react";

import { Main } from "./components/Main";
import { About } from './components/About'; 
import { Cases } from './components/Cases';
import { Scan } from './components/Scan';
import { Footer } from './components/Footer';

import "./global.scss";

export const App = () => {
  return (
    <>
      <Main />
      <About />
      <Cases />
      <Scan />
      <Footer />
    </>
  );
};
