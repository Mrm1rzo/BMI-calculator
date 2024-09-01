import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let [footer, setFooter] = useState(true);

  const result = () => {
    setFooter(true);
  };
  const back = () => {
    setFooter(false);
  };
  return (
    <section id="footer-section">
      <div className="footer-content container">
        {footer == true ? (
          <NavLink className="footer-link website-link" to="/result" onClick={back}>
            Calculator
          </NavLink>
        ) : (
          <NavLink
            className="footer-link website-link"
            to="/"
            onClick={result}
          >
            Back
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default Footer;
