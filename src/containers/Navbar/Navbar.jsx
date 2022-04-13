import React from "react";

const Navbar = () => {
  return (
    <div className="uk-section-primary uk-preserve-color">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div uk-navbar>
              <ul className="uk-navbar-nav">
                <li className="uk-active" style={{ marginRight: "20px" }}>
                  <a href="#">Rent-a-Car Assignment</a>
                </li>
                <li>
                  <a href="#">Vehicles</a>
                </li>
                <li>
                  <a href="#">Customers</a>
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
