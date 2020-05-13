import React from "react";
import PropTypes from "prop-types";

export const LetterCase = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-letter-case"
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
      <circle cx="18" cy="16" r="3" />
      <line x1="21" y1="13" x2="21" y2="19" />
      <path d="M3 19l5 -13l5 13" />
      <line x1="5" y1="14" x2="11" y2="14" />
    </svg>
  );
};

LetterCase.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
