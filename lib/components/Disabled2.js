import React from "react";
import PropTypes from "prop-types";

export const Disabled2 = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-disabled-2"
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
      <circle cx="17" cy="6" r="2" />
      <path d="M9 11a4.97 4.97 0 1 0 3.95 7.95" />
      <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
    </svg>
  );
};

Disabled2.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
