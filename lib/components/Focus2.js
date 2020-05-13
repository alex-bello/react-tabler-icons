import React from "react";
import PropTypes from "prop-types";

export const Focus2 = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-focus-2"
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
      <circle cx="12" cy="12" r=".5" fill="currentColor" />
      <circle cx="12" cy="12" r="7" />
      <line x1="12" y1="3" x2="12" y2="5" />
      <line x1="3" y1="12" x2="5" y2="12" />
      <line x1="12" y1="19" x2="12" y2="21" />
      <line x1="19" y1="12" x2="21" y2="12" />
    </svg>
  );
};

Focus2.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
