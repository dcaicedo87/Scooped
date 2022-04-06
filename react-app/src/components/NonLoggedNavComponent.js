import React from "react";
import { NavLink } from "react-router-dom";

function NonLoggedNavComponent() {
  return (
    <>
      <li>
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sign-up"
          exact={true}
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );
}

export default NonLoggedNavComponent;
