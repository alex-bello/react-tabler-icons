import React from "react";
import PropTypes from "prop-types";

export const BrightnessDown = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brightness-down"
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
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="5" x2="12" y2="5.01" />
      <line x1="17" y1="7" x2="17" y2="7.01" />
      <line x1="19" y1="12" x2="19" y2="12.01" />
      <line x1="17" y1="17" x2="17" y2="17.01" />
      <line x1="12" y1="19" x2="12" y2="19.01" />
      <line x1="7" y1="17" x2="7" y2="17.01" />
      <line x1="5" y1="12" x2="5" y2="12.01" />
      <line x1="7" y1="7" x2="7" y2="7.01" />
    </svg>
  );
};

BrightnessDown.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
