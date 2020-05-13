import React from "react";
import PropTypes from "prop-types";

export const Layout2 = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-layout-2"
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
      <rect x="4" y="4" width="6" height="5" rx="2" />
      <rect x="4" y="13" width="6" height="7" rx="2" />
      <rect x="14" y="4" width="6" height="7" rx="2" />
      <rect x="14" y="15" width="6" height="5" rx="2" />
    </svg>
  );
};

Layout2.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
