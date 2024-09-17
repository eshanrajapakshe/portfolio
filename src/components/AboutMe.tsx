import React from "react";
import BackgroundOne from "./backgrounds/BackgroundOne";
import BackgroundTwo from "./backgrounds/BackgroundTwo";
import { HiDownload } from "react-icons/hi";

import MyImage from "../assets/images/about-image.jpg";

const AboutMe = () => {
  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/10S4t5TkkdunndVrGaae-diIqqpfxqESz/view?usp=sharing",
    );
  };

  const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2017;
  };

  return (
    <div className="about-me-section">
      <BackgroundTwo style="about-me-bg" />
      <BackgroundOne style="about-me-bg-two" />
      <div className="about-me-main container">
        <div className="my-image">
          <img src={MyImage} alt="" />
        </div>
        <div className="about-me">
          <div className="my-info">
            <div>
              <div>
                <span>Name : </span> Eshan Rajapakshe
              </div>
              <div>
                <span>Email : </span>{" "}
                <a href="mailto:eshanrajapakse@gmail.com">
                  eshanrajapakse@gmail.com
                </a>
              </div>
            </div>
            <div>
              <div>
                <span>Mobile : </span>{" "}
                <a href="tel:+94777712007">+94 777712007</a>
              </div>
              <div>
                <span>LinkedIn : </span>{" "}
                <a
                  href="https://www.linkedin.com/in/eshan-rajapakshe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/eshan-rajapakshe
                </a>
              </div>
            </div>
          </div>
          <h3>Designer, Frontend Developer & Mentor</h3>
          <p>
            I am a versatile professional with expertise in user experience/user
            interface design and front-end development. As a self-learner and
            dedicated worker, I am passionate about pursuing new learning
            opportunities to achieve both personal and corporate goals. My
            journey has been guided by innovative ideas and creativity,
            consistently paving the way for success.
          </p>
          <p>
            As a UI designer and developer, I leverage my skills using design
            tools, frontend development technologies, and various UI frameworks
            and libraries. Additionally, I have a solid understanding of backend
            technologies, rounding out my proficiency in the full spectrum of
            web development.
          </p>
          <p>
            I hold an MSc in Software Engineering, further enriching my
            expertise in the dynamic field of web development.
          </p>
          <div className="about-sub-section">
            <div>
              <button
                type="button"
                onClick={downloadCV}
                className="btn read-more-btn"
              >
                Download CV{" "}
                <HiDownload size="1.1em" className="cv-download-icon" />
              </button>
            </div>
            <div className="experience-main">
              <h6>Experience</h6>
              <div>
                <h1>{experienceYears()}</h1>
                <span>+ YEARS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
