import React from "react";
import PropTypes from "prop-types";

export const Virus = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-virus"
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
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v-4m-1 0h2" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
    </svg>
  );
};

Virus.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
