import React from "react";

function NextArrow({ onClick }) {
  return (
    <span className="arrow _right" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </span>
  );
}

export default NextArrow;
