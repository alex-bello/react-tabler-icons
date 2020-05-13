import React from "react";
import PropTypes from "prop-types";

export const Router = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-router"
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
      <rect x="3" y="13" width="18" height="8" rx="2" />
      <line x1="17" y1="17" x2="17" y2="17.01" />
      <line x1="13" y1="17" x2="13" y2="17.01" />
      <line x1="15" y1="13" x2="15" y2="11" />
      <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
      <path d="M8.5 6.5a8 8 0 0 1 13 0" />
    </svg>
  );
};

Router.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
