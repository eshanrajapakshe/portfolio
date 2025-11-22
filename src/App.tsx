import React from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import MainPage from "./components/MainPage";
import WhatIDo from "./components/WhatIDo";
import SayHello from "./components/SayHello";
import OpenSource from "./components/OpenSource";
import CodePenShowcase from "./components/CodePenShowcase";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <MainPage />
      <AboutMe />
      <WhatIDo />
      <OpenSource />
      <Portfolio />
      <CodePenShowcase />
      <SayHello />
    </React.Fragment>
  );
}

export default App;
