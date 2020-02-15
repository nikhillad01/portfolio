import React from "react";
import "./ProgressBar.css";

export const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${props.percentage}%` }} />
    </div>
  );
};
