import React from "react";
import PropTypes from "prop-types";

export const GitPullRequest = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-git-pull-request"
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
      <circle cx="6" cy="18" r="2" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <polyline points="14 9 11 6 14 3" />
    </svg>
  );
};

GitPullRequest.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
