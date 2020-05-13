import React from "react";
import PropTypes from "prop-types";

export const ClipboardList = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-clipboard-list"
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
      <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
      <line x1="9" y1="12" x2="9.01" y2="12" />
      <line x1="13" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="9.01" y2="16" />
      <line x1="13" y1="16" x2="15" y2="16" />
    </svg>
  );
};

ClipboardList.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
