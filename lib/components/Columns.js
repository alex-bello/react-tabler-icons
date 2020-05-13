import React from "react";
import PropTypes from "prop-types";

export const Columns = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-columns"
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
      <line x1="4" y1="6" x2="9.5" y2="6" />
      <line x1="4" y1="10" x2="9.5" y2="10" />
      <line x1="4" y1="14" x2="9.5" y2="14" />
      <line x1="4" y1="18" x2="9.5" y2="18" />
      <line x1="14.5" y1="6" x2="20" y2="6" />
      <line x1="14.5" y1="10" x2="20" y2="10" />
      <line x1="14.5" y1="14" x2="20" y2="14" />
      <line x1="14.5" y1="18" x2="20" y2="18" />
    </svg>
  );
};

Columns.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
