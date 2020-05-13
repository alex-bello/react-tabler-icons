import React from "react";
import PropTypes from "prop-types";

export const Brush = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brush"
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
      <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
      <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
      <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
      <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
    </svg>
  );
};

Brush.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
