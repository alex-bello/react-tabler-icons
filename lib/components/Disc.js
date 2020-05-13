import React from "react";
import PropTypes from "prop-types";

export const Disc = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-disc"
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1" />
      <path d="M7 12a5 5 0 0 1 5 -5" />
      <path d="M12 17a5 5 0 0 0 5 -5" />
    </svg>
  );
};

Disc.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
