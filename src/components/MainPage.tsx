import React from "react";
import BackgroundOne from "./backgrounds/BackgroundOne";

import MainImage from "../assets/images/Main-Image.png";

const MainPage = () => {
  const scrollFunc = () => {
    const scrollToTopButton = document.getElementById("js-top") as HTMLElement;
    let y = window.scrollY;
    if (y > 0) {
      scrollToTopButton.className = "top-link show";
    } else {
      scrollToTopButton.className = "top-link hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  const handleScrollToTopButton = (e: any) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <div className="main-page">
      <div className="main-text">
        <h1>
          Hello, <br />
          <span>I'm Eshan Rajapakshe!</span>
        </h1>
        {/* <h4>Senior Software Engineer</h4> */}
        <h5>
          I am an experienced Associate Technical Lead with over 7 years of
          extensive experience. I specialize in designing and developing
          flawless websites and web applications. If you are looking for a
          skilled professional to collaborate with, I would be thrilled to work
          with you.
        </h5>
      </div>

      <div className="main-image-main">
        <img src={MainImage} alt="Eshan image" />

        <div className="social-profiles">
          <div>
            <a
              href="https://github.com/eshanrajapakshe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg id="github" viewBox="0 0 24 24">
                <title>github</title>
                <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/eshan.rajapakshe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg id="facebook" viewBox="0 0 112.196 112.196">
                <title>facebook</title>
                <circle
                  style={{ fill: "#3B5998" }}
                  cx="56.098"
                  cy="56.098"
                  r="56.098"
                ></circle>
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.pinterest.com/eshanrajapakse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg id="pinterest" viewBox="0 0 112.198 112.198">
                <title>pinterest</title>
                <circle
                  style={{ fill: "#CB2027" }}
                  cx="56.099"
                  cy="56.1"
                  r="56.098"
                />
                <g>
                  {" "}
                  <path
                    style={{ fill: "#F1F2F2" }}
                    d="M60.627,75.122c-4.241-0.328-6.023-2.431-9.349-4.45c-1.828,9.591-4.062,18.785-10.679,23.588 c-2.045-14.496,2.998-25.384,5.34-36.941c-3.992-6.72,0.48-20.246,8.9-16.913c10.363,4.098-8.972,24.987,4.008,27.596 c13.551,2.724,19.083-23.513,10.679-32.047c-12.142-12.321-35.343-0.28-32.49,17.358c0.695,4.312,5.151,5.621,1.78,11.571 c-7.771-1.721-10.089-7.85-9.791-16.021c0.481-13.375,12.018-22.74,23.59-24.036c14.635-1.638,28.371,5.374,30.267,19.14 C85.015,59.504,76.275,76.33,60.627,75.122L60.627,75.122z"
                  />{" "}
                </g>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://codepen.io/eshanrajapakshe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg id="codepen" viewBox="0 0 24 24">
                <title>codepen</title>
                <path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <BackgroundOne />

      <a
        className="top-link hide"
        href=""
        id="js-top"
        onClick={handleScrollToTopButton}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
          <path d="M12 6H0l6-6z" />
        </svg>
        <span className="screen-reader-text">Back to top</span>
      </a>
    </div>
  );
};

export default MainPage;
