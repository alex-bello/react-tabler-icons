import React from "react";
import PropTypes from "prop-types";

export const Keyboard = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-keyboard"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      strokeWidth={stroke || "1.25"}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="7" y1="8" x2="7" y2="8.01" />
      <line x1="12" y1="8" x2="12" y2="8.01" />
      <line x1="17" y1="8" x2="17" y2="8.01" />
      <line x1="7" y1="12" x2="7" y2="12.01" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <line x1="17" y1="12" x2="17" y2="12.01" />
      <line x1="7" y1="16" x2="17" y2="16" />
    </svg>
  );
};

Keyboard.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
