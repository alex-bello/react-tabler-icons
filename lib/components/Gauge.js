import React from "react";
import PropTypes from "prop-types";

export const Gauge = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-gauge"
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1" />
      <line x1="13.41" y1="10.59" x2="16" y2="8" />
      <path d="M7 12a5 5 0 0 1 5 -5" />
    </svg>
  );
};

Gauge.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
