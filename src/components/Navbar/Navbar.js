import React from "react";
import { withRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__layout">
        <div className="navbar__items">
          <div className="navbar__item">
            <Link to="/bio">Biographie</Link>
          </div>
          <div className="navbar__item">Galerie</div>
          <div className="navbar__item">Evènements</div>
          <div className="navbar__item">Ecoute</div>
        </div>
        <div className="navbar__widget">WIDGET</div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
