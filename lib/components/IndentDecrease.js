import React from "react";
import PropTypes from "prop-types";

export const IndentDecrease = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-indent-decrease"
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
      <line x1="20" y1="6" x2="13" y2="6" />
      <line x1="20" y1="12" x2="11" y2="12" />
      <line x1="20" y1="18" x2="13" y2="18" />
      <path d="M8 8l-4 4l4 4" />
    </svg>
  );
};

IndentDecrease.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
