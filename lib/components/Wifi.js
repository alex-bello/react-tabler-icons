import React from "react";
import PropTypes from "prop-types";

export const Wifi = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-wifi"
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
      <g transform="rotate(-45 12 18)">
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <path d="M12 14a4 4 0 0 1 4 4" />
        <path d="M12 10a8 8 0 0 1 8 8" />
        <path d="M12 6a12 12 0 0 1 12 12" />
      </g>
    </svg>
  );
};

Wifi.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
