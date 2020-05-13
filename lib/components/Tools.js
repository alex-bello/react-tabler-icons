import React from "react";
import PropTypes from "prop-types";

export const Tools = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-tools"
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
      <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
      <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
      <polyline points="12 8 7 3 3 7 8 12" />
      <line x1="7" y1="8" x2="5.5" y2="9.5" />
      <polyline points="16 12 21 17 17 21 12 16" />
      <line x1="16" y1="17" x2="14.5" y2="18.5" />
    </svg>
  );
};

Tools.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
