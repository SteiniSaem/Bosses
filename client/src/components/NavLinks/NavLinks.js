import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-list mr-auto">
      <li>
        <NavLink to="/">
          <img id="logo" src="../../lambo.png" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/bosses">
          Bosses
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
