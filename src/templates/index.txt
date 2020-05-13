import React from "react";
import PropTypes from "prop-types";
import * as Icons from "./components";

export const Icon = ({ name, height, width, stroke }) => {
  const ReturnIcon = Icons[name];
  return (
    <span style={{ margin: "0", padding: "0" }}>
      <ReturnIcon height={height} width={width} stroke={stroke} />
    </span>
  );
};

Icon.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export * as TablerIcons from "./components";
