import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SayHello = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`say-hello-main fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="say-hello-content">
        <h1>Let's Create Together</h1>
        <p>Let's connect and build something great</p>
        <a
          href="mailto:eshanrajapakshe@gmail.com"
          className="email-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          eshanrajapakshe@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SayHello;
