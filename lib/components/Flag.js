import React from "react";
import PropTypes from "prop-types";

export const Flag = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-flag"
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
      <line x1="5" y1="5" x2="5" y2="21" />
      <line x1="19" y1="5" x2="19" y2="14" />
      <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
      <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
    </svg>
  );
};

Flag.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
