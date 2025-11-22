import { SiNpm } from "react-icons/si";
import { HiExternalLink, HiDownload } from "react-icons/hi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface NpmPackage {
  name: string;
  description: string;
  npmUrl: string;
  downloads?: string;
}

const OpenSource = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const npmPackages: NpmPackage[] = [
    {
      name: "@eshan.rajapakshe/react-waypoint",
      description:
        "Modern TypeScript implementation of react-waypoint with React 19 compatibility for scroll-based callbacks.",
      npmUrl: "https://www.npmjs.com/package/@eshan.rajapakshe/react-waypoint",
    },
    {
      name: "@eshan.rajapakshe/use-transition-state",
      description:
        "React hook for smooth CSS transitions - a drop-in replacement for useState with animation support.",
      npmUrl:
        "https://www.npmjs.com/package/@eshan.rajapakshe/use-transition-state",
    },
    {
      name: "@eshan.rajapakshe/gh-switch",
      description:
        "CLI tool to seamlessly manage multiple GitHub accounts with different SSH keys and git configurations.",
      npmUrl: "https://www.npmjs.com/package/@eshan.rajapakshe/gh-switch",
    },
  ];

  return (
    <div
      ref={ref}
      className={`open-source-section fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="container">
        <div className="section-header">
          <SiNpm className="section-icon" />
          <h2>Open Source Contributions</h2>
          <p>NPM packages I've published to help the developer community</p>
        </div>

        <div className="npm-packages-grid">
          {npmPackages.map((pkg, index) => (
            <div key={index} className="npm-package-card">
              <div className="package-header">
                <SiNpm className="npm-icon" />
                <h3>{pkg.name}</h3>
              </div>
              <p className="package-description">{pkg.description}</p>
              <div className="package-footer">
                {pkg.downloads && (
                  <div className="package-stats">
                    <HiDownload />
                    <span>{pkg.downloads} downloads</span>
                  </div>
                )}
                <a
                  href={pkg.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-link"
                >
                  View on NPM <HiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-link">
          <a
            href="https://www.npmjs.com/~eshan.rajapakshe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn view-all-btn"
          >
            View All Packages <HiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
