import React from "react";
import PropTypes from "prop-types";

export const Building = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-building"
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
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="9" y1="8" x2="10" y2="8" />
      <line x1="9" y1="12" x2="10" y2="12" />
      <line x1="9" y1="16" x2="10" y2="16" />
      <line x1="14" y1="8" x2="15" y2="8" />
      <line x1="14" y1="12" x2="15" y2="12" />
      <line x1="14" y1="16" x2="15" y2="16" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </svg>
  );
};

Building.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
