import React from "react";
import PropTypes from "prop-types";

export const LayoutDistributeVertical = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-layout-distribute-vertical"
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
      <line x1="4" y1="4" x2="4" y2="20" />
      <line x1="20" y1="4" x2="20" y2="20" />
      <rect x="9" y="6" width="6" height="12" rx="2" />
    </svg>
  );
};

LayoutDistributeVertical.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
