import React from "react";
import PropTypes from "prop-types";

export const FloatCenter = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-float-center"
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
      <rect width="6" height="6" x="9" y="5" rx="1" />
      <line x1="4" y1="7" x2="5" y2="7" />
      <line x1="4" y1="11" x2="5" y2="11" />
      <line x1="19" y1="7" x2="20" y2="7" />
      <line x1="19" y1="11" x2="20" y2="11" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="4" y1="19" x2="20" y2="19" />
    </svg>
  );
};

FloatCenter.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
