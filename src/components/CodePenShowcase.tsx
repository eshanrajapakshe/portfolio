import { useEffect } from "react";
import { SiCodepen } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface CodePenItem {
  title: string;
  slug: string;
  height?: number;
}

const CodePenShowcase = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const codePens: CodePenItem[] = [
    {
      title: "Hello SVG Text Animation Page Preloader",
      slug: "KeBzRv",
      height: 400,
    },
    {
      title: "Liquid Glass Menu",
      slug: "MYwXOoG",
      height: 400,
    },
    {
      title: "Paint Letters",
      slug: "XJdzWdg",
      height: 400,
    },
    {
      title: "Fancy List",
      slug: "XJrvvWE",
      height: 400,
    },
    {
      title: "Shine Button",
      slug: "yyNGxrp",
      height: 400,
    },
    {
      title: "GSAP Scroll Effect | Mammut Clone",
      slug: "MYKgJwV",
      height: 400,
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`codepen-showcase-section fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="container">
        <div className="section-header">
          <SiCodepen className="section-icon" />
          <h2>CodePen Creations</h2>
          <p>Interactive UI components and creative experiments</p>
        </div>

        {codePens.length > 0 ? (
          <div className="codepen-grid">
            {codePens.map((pen, index) => (
              <div key={index} className="codepen-item">
                <div className="codepen-embed-wrapper">
                  <p
                    className="codepen"
                    data-height={pen.height || 400}
                    data-default-tab="result"
                    data-slug-hash={pen.slug}
                    data-pen-title={pen.title}
                    data-user="eshanrajapakshe"
                    style={{
                      height: `${pen.height || 400}px`,
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid",
                      margin: "1em 0",
                      padding: "1em",
                    }}
                  >
                    <span>
                      See the Pen{" "}
                      <a
                        href={`https://codepen.io/eshanrajapakshe/pen/${pen.slug}`}
                      >
                        {pen.title}
                      </a>{" "}
                      by Eshan Rajapakshe (
                      <a href="https://codepen.io/eshanrajapakshe">
                        @eshanrajapakshe
                      </a>
                      ) on <a href="https://codepen.io">CodePen</a>.
                    </span>
                  </p>
                </div>
                <h3 className="codepen-title">{pen.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: "3rem", color: "#c5c5c5" }}
          >
            <p>CodePen showcase coming soon...</p>
          </div>
        )}

        <div className="view-all-link">
          <a
            href="https://codepen.io/eshanrajapakshe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn view-all-btn"
          >
            View All on CodePen <HiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodePenShowcase;
