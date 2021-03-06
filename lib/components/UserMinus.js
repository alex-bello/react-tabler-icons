import React from "react";
import PropTypes from "prop-types";

export const UserMinus = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-user-minus"
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
      <circle cx="8.5" cy="7" r="4" />
      <path d="M2 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
      <line x1="16" y1="11" x2="22" y2="11" />
    </svg>
  );
};

UserMinus.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
