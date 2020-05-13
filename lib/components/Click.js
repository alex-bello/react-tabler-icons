import React from "react";
import PropTypes from "prop-types";

export const Click = ({ height, stroke, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-click"
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
      <line x1="3" y1="12" x2="6" y2="12" />
      <line x1="12" y1="3" x2="12" y2="6" />
      <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
      <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
      <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
      <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
    </svg>
  );
};

Click.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
