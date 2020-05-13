import React from "react";
import PropTypes from "prop-types";

export const Scale = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-scale"
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
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <polyline points="3 6 6 7 12 5 18 7 21 6" />
      <path d="M6 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
      <path d="M18 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
    </svg>
  );
};

Scale.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
