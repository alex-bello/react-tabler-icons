import React from "react";
import PropTypes from "prop-types";

export const RotateClockwise2 = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-rotate-clockwise-2"
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
      <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
      <path d="M11 19.95a8 8 0 0 1 -5.3 -12.8" strokeDasharray=".001 4.13" />
    </svg>
  );
};

RotateClockwise2.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
