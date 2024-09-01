import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar-section">
      <div className="navbar-content container">
        <NavLink className="navbar-link website-link" to="/">
          BMI Calculator
        </NavLink>
        {/* <NavLink to="/result">Result</NavLink> */}
      </div>
    </section>
  );
};

export default Navbar;
