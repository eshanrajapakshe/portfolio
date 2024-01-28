import React from "react";
import "./index.scss";

interface Props {
  rounded?: boolean;
  dot?: boolean;
  role: {
    text: string;
    status: "blue" | "grey" | "green" | "red" | "yellow";
  };
}

export const Badge = ({ role, rounded, dot }: Props) => {
  const { text, status } = role;

  const getColorsByState = (status: string) => {
    switch (status) {
      case "blue":
        return "blue";
      case "grey":
        return "grey";
      case "green":
        return "green";
      case "red":
        return "red";
      case "yellow":
        return "yellow";
      default:
        return "grey";
    }
  };

  return (
    <span
      className={`badge ${rounded ? "badge-rounded" : ""} ${getColorsByState(
        status,
      )}`}
    >
      {dot && <span className="dot" />} <span className="text">{text}</span>
    </span>
  );
};

Badge.defaultProps = {
  rounded: undefined,
  dot: undefined,
  onRemove: undefined,
};
