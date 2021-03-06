import React from "react";
import PropTypes from "prop-types";

export const SwitchVertical = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-switch-vertical"
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
      <polyline points="3 8 7 4 11 8" />
      <line x1="7" y1="4" x2="7" y2="13" />
      <polyline points="13 16 17 20 21 16" />
      <line x1="17" y1="10" x2="17" y2="20" />
    </svg>
  );
};

SwitchVertical.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
