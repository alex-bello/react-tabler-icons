import React from "react";
import PropTypes from "prop-types";

export const Award = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-award"
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
      <circle cx="12" cy="9" r="6" />
      <polyline
        points="9 14.2 9 21 12 19 15 21 15 14.2"
        transform="rotate(-30 12 9)"
      />
      <polyline
        points="9 14.2 9 21 12 19 15 21 15 14.2"
        transform="rotate(30 12 9)"
      />
    </svg>
  );
};

Award.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
