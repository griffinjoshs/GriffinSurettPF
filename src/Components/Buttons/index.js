import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--card", "btn--form"];

const SIZES = ["btn--medium", "btn--large", "btn--small"];

const index = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonLink,
  href,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        href={href}
      >
        {children}
      </button>
  );
};

export default index;
