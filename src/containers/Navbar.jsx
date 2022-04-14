import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="uk-section-primary uk-preserve-color">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div uk-navbar="true">
              <ul className="uk-navbar-nav">
                <li className="uk-active" style={{ marginRight: "20px" }}>
                  <Link to={"/"}>Rent-a-Car Assignment</Link>
                </li>
                <li>
                <Link to={"/"}>Vehicles</Link>
                </li>
                <li>
                <Link to={"/customers"}>Customers</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
