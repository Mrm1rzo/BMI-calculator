import React from "react";
import { NavLink } from "react-router-dom";

const Result = () => {
  return (
    <section id="result-section">
      <div className="result-content container">
        <h3 className="result-title">Titile</h3>
        <span className="result-count">Count</span>
        <p className="result-subtitle">Description</p>
      </div>
    </section>
  );
};

export default Result;
