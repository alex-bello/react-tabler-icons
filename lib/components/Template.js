import React from "react";
import PropTypes from "prop-types";

export const Template = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-template"
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
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <rect x="4" y="12" width="6" height="8" rx="1" />
      <line x1="14" y1="12" x2="20" y2="12" />
      <line x1="14" y1="16" x2="20" y2="16" />
      <line x1="14" y1="20" x2="20" y2="20" />
    </svg>
  );
};

Template.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
