import React from "react";
import PropTypes from "prop-types";

export const Exposure = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-exposure"
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="4.6" y1="19.4" x2="19.4" y2="4.6" />
      <path d="M7 9h4m-2 -2v4" />
      <path d="M13 16h4" />
    </svg>
  );
};

Exposure.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
