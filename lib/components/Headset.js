import React from "react";
import PropTypes from "prop-types";

export const Headset = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-headset"
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
      <rect x="4" y="13" rx="2" width="4" height="6" />
      <rect x="16" y="13" rx="2" width="4" height="6" />
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <path d="M18 19a6 3 0 0 1 -6 3" />
    </svg>
  );
};

Headset.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
