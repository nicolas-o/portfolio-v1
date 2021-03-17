import React from "react";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import SobreMi from "./components/Main/SobreMi/SobreMi";
import QueHago from "./components/Main/QueHago/QueHago";
import theme from "./Muitheme";
import Header from "./components/Header/Header";
import AnimationOnScroll from "./utils/AnimationScroll";
import Proyectos from "./components/Main/Proyectos/Proyectos.jsx";
import Contactame from "./components/Main/Contactame/Contactame";

const App = () => {
  AnimationOnScroll();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SobreMi />
      <QueHago />
      <Proyectos />
      <Contactame />
    </ThemeProvider>
  );
};

export default App;
