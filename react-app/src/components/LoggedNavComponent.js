import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

function LoggedNavComponent({ userId }) {
  return (
    <>
      <li>
        <NavLink
          to={`/users/${userId}`}
          exact={true}
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <LogoutButton />
      </li>
    </>
  );
}

export default LoggedNavComponent;
