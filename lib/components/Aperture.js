import React from "react";
import PropTypes from "prop-types";

export const Aperture = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-aperture"
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
      <line x1="3.6" y1="15" x2="14.15" y2="15" />
      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
    </svg>
  );
};

Aperture.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
