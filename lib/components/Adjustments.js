import React from "react";
import PropTypes from "prop-types";

export const Adjustments = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-adjustments"
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
      <circle cx="6" cy="10" r="2" />
      <line x1="6" y1="4" x2="6" y2="8" />
      <line x1="6" y1="12" x2="6" y2="20" />
      <circle cx="12" cy="16" r="2" />
      <line x1="12" y1="4" x2="12" y2="14" />
      <line x1="12" y1="18" x2="12" y2="20" />
      <circle cx="18" cy="7" r="2" />
      <line x1="18" y1="4" x2="18" y2="5" />
      <line x1="18" y1="9" x2="18" y2="20" />
    </svg>
  );
};

Adjustments.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
