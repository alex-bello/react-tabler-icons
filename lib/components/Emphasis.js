import React from "react";
import PropTypes from "prop-types";

export const Emphasis = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-emphasis"
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
      <path d="M16 5 h-8v10h8m-1 -5h-7" />
      <line x1="6" y1="20" x2="6" y2="20.01" />
      <line x1="10" y1="20" x2="10" y2="20.01" />
      <line x1="14" y1="20" x2="14" y2="20.01" />
      <line x1="18" y1="20" x2="18" y2="20.01" />
    </svg>
  );
};

Emphasis.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
