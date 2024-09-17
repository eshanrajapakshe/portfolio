import React, { useState } from "react";
import { Badge } from "./atoms/Badge";

const roles = {
  uiDesign: {
    text: "UI Design",
    status: "blue" as const,
  },
  uiDev: {
    text: "UI Development",
    status: "green" as const,
  },
  feDev: {
    text: "Front-end Development",
    status: "red" as const,
  },
};

const Portfolio = () => {
  return (
    <div className="portfolio-gallery">
      <div className="portfolio-title">
        <h2>Latest Projects</h2>
      </div>

      <div className="projects-wrapper">
        <div className="project">
          <a href="https://www.serendib.io/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDesign} />
              <Badge role={roles.uiDev} />
            </div>
            <h3>Serendib Systems Corporate Website</h3>
            <h5>Adobe Photoshop, Adobe Illustrator, HTML5, CSS, JavaScript</h5>
            <p>
              Elevated the digital footprint for Serendib Systems, a dynamic
              software development company with a presence in Australia and Sri
              Lanka. Crafted, and developed their website to precisely meet
              their requirements.
            </p>
          </a>
        </div>

        <div className="project">
          <a href="https://www.sms160.io/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDesign} />
              <Badge role={roles.uiDev} />
            </div>
            <h3>SMS160 Website</h3>
            <h5>Adobe Photoshop, Adobe Illustrator, HTML5, CSS, JavaScript</h5>
            <p>
              Contributed to the digital presence of sms160, a product by
              Serendib Systems, by designing and developing a tailored website
              that aligns seamlessly with their specific requirements.
            </p>
          </a>
        </div>

        <div className="project">
          <a href="https://eshanrajapakshe.github.io/biogen/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDesign} />
              <Badge role={roles.uiDev} />
            </div>
            <h3>Biogen Corporate Website</h3>
            <h5>Adobe Photoshop, Adobe Illustrator, HTML5, CSS, JavaScript</h5>
            <p>
              Designed, developed, and hosted the website for Biogen, an Organic
              Agriculture Solution Company, aligning seamlessly with their
              specific requirements.
            </p>
          </a>
        </div>

        <div className="project">
          <a href="https://spice-chest.netlify.app/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDesign} />
              <Badge role={roles.uiDev} />
            </div>
            <h3>Spice Chest Corporate Website</h3>
            <h5>Adobe Photoshop, Adobe Illustrator, HTML5, CSS, JavaScript</h5>
            <p>
              Transformed the online presence for Spice Chest, a leading Spices
              and Herbs exporting company, by designing, developing, and hosting
              their website to align seamlessly with their unique requirements.
            </p>
          </a>
        </div>

        <div className="project">
          <a href="https://integrityalert.ai/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDev} />
            </div>
            <h3>IntegrityAlert.ai Corporate Website</h3>
            <h5>HTML5, CSS, JavaScript</h5>
            <p>
              IntegrityAlert.ai, tailored for global enterprises, fosters active
              corporate integrity engagement by seamlessly integrating AI and
              human participation.
            </p>
          </a>
        </div>

        <div className="project">
          <a href="https://www.rezgateway.com/" target="_blank">
            <div className="project-role">
              <Badge role={roles.uiDev} />
            </div>
            <h3>Reservations Gateway Corporate Website</h3>
            <h5>HTML5, CSS, JavaScript</h5>
            <p>
              Rezgateway is a software development agency & even offers
              customers its own data analytics platform.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
