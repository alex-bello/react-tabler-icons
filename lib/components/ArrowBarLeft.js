import React from "react";
import PropTypes from "prop-types";

export const ArrowBarLeft = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-bar-left"
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
      <line x1="4" y1="12" x2="14" y2="12" />
      <line x1="4" y1="12" x2="8" y2="16" />
      <line x1="4" y1="12" x2="8" y2="8" />
      <line x1="20" y1="4" x2="20" y2="20" />
    </svg>
  );
};

ArrowBarLeft.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
