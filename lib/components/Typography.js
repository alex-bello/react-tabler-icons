import React from "react";
import PropTypes from "prop-types";

export const Typography = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-typography"
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
      <line x1="4" y1="20" x2="7" y2="20" />
      <line x1="14" y1="20" x2="21" y2="20" />
      <line x1="6.9" y1="15" x2="13.8" y2="15" />
      <line x1="10.2" y1="6.3" x2="16" y2="20" />
      <polyline points="5 20 11 4 13 4 20 20" />
    </svg>
  );
};

Typography.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
