import React from "react";
import PropTypes from "prop-types";

export const TemperatureFahrenheit = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-temperature-fahrenheit"
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
      <circle cx="6" cy="8" r="2" />
      <line x1="13" y1="12" x2="18" y2="12" />
      <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
    </svg>
  );
};

TemperatureFahrenheit.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
