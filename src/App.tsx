import React from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import MainPage from "./components/MainPage";
import WhatIDo from "./components/WhatIDo";
import SayHello from "./components/SayHello";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <MainPage />
      <AboutMe />
      <WhatIDo />
      <Portfolio />
      <SayHello />
    </React.Fragment>
  );
}

export default App;
