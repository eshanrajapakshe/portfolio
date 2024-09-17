import React from "react";
import HTML from "../assets/images/tech/html.png";
import CSS from "../assets/images/tech/css.svg";
import JS from "../assets/images/tech/javascript.png";
import Sass from "../assets/images/tech/sass.png";
import Jquery from "../assets/images/tech/jquery.png";
import ReactIco from "../assets/images/tech/react.svg";

import AntDesign from "../assets/images/tech/ant-design.svg";
import Materialui from "../assets/images/tech/material-ui.svg";
import ReactBootstrap from "../assets/images/tech/React-Bootstrap.svg";
import Bootstrap from "../assets/images/tech/bootstrap.svg";

import git from "../assets/images/tech/git.png";

import Photoshop from "../assets/images/tech/photoshop.png";
import Illustrator from "../assets/images/tech/illustrator.png";
import FigmaLogo from "../assets/images/tech/Figma-logo.svg";
import AdobeXD from "../assets/images/tech/AdobeXD.png";

import Typescript from "../assets/images/tech/typescript.png";
import MongoDB from "../assets/images/tech/MongoDB.svg";
import Node from "../assets/images/tech/Node.svg";
import Redux from "../assets/images/tech/redux-icon.webp";

import UiDesign from "../assets/images/skills/001-graphic-designer.png";
import UiDev from "../assets/images/skills/002-responsive-design.png";
import Dev from "../assets/images/skills/003-gear.png";

const WhatIDo = () => {
  return (
    <div className="what-i-do-section">
      <h1>SPECIALIZING IN</h1>
      <div className="what-i-do-main container">
        <div>
          <img src={UiDesign} alt="" />
          <h4>UI Design</h4>
          <h6>
            Wireframing and design of modern, attractive, mobile-first user
            interfaces using Adobe Photoshop, Illustrator, and other wireframing
            tools.
          </h6>
        </div>
        <div>
          <img src={UiDev} alt="" />
          <h4>UI Development</h4>
          <h6>
            Develop flexible and efficient fully mobile-responsive,
            cross-browser compatible user interfaces while considering usability
            and accessibility.
          </h6>
        </div>
        <div>
          <img src={Dev} alt="" />
          <h4>Front-end Development</h4>
          <h6>
            Developing user interfaces using JavaScript frameworks and
            libraries, CSS preprocessors, integrating with RESTful services and
            APIs, testing and debugging, and utilizing Git and Version Control
            Systems.
          </h6>
        </div>
      </div>
      <div>
        <div className="techs-using container">
          <div className="techs">
            <div>
              <img src={HTML} alt="" />
            </div>
            <p>HTML5</p>
          </div>

          <div className="techs">
            <div>
              <img src={CSS} alt="" />
            </div>
            <p>CSS3</p>
          </div>

          <div className="techs">
            <div>
              <img src={JS} alt="" />
            </div>
            <p>JavaScript</p>
          </div>

          <div className="techs">
            <div>
              <img src={Sass} alt="" />
            </div>
            <p>Sass</p>
          </div>

          <div className="techs">
            <div>
              <img src={Jquery} alt="" />
            </div>
            <p>jQuery</p>
          </div>

          <div className="techs">
            <div>
              <img src={ReactIco} alt="" />
            </div>
            <p>ReactJs</p>
          </div>
        </div>

        <div className="techs-using container">
          <div className="techs">
            <div>
              <img src={Bootstrap} alt="" />
            </div>
            <p>Bootstrap</p>
          </div>

          <div className="techs">
            <div>
              <img src={Materialui} alt="" />
            </div>
            <p>MATERIAL-UI</p>
          </div>

          <div className="techs">
            <div>
              <img src={ReactBootstrap} alt="" />
            </div>
            <p>React Bootstrap</p>
          </div>

          <div className="techs">
            <div>
              <img src={AntDesign} alt="" />
            </div>
            <p>Ant Design</p>
          </div>
        </div>

        <div className="techs-using container">
          <div className="techs">
            <div>
              <img src={Typescript} alt="" />
            </div>
            <p>TypeScript</p>
          </div>

          <div className="techs">
            <div>
              <img src={Node} alt="" />
            </div>
            <p>Node.js</p>
          </div>

          <div className="techs">
            <div>
              <img src={MongoDB} alt="" />
            </div>
            <p>MongoDB</p>
          </div>

          <div className="techs">
            <div>
              <img src={Redux} alt="" />
            </div>
            <p>Redux</p>
          </div>
        </div>

        <div className="techs-using container">
          <div className="techs">
            <div>
              <img src={git} alt="" />
            </div>
            <p>git</p>
          </div>
        </div>

        <div className="techs-using container">
          <div className="techs">
            <div>
              <img src={Photoshop} alt="" />
            </div>
            <p>Adobe Photoshop</p>
          </div>

          <div className="techs">
            <div>
              <img src={Illustrator} alt="" />
            </div>
            <p>Adobe Illustrator</p>
          </div>

          <div className="techs">
            <div>
              <img src={AdobeXD} alt="" />
            </div>
            <p>Adobe XD</p>
          </div>

          <div className="techs">
            <div>
              <img src={FigmaLogo} alt="" />
            </div>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
