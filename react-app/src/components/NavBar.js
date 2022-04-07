import React from "react";
import { Link, NavLink } from "react-router-dom";
import LoggedNavComponent from "./LoggedNavComponent";
import NonLoggedNavComponent from "./NonLoggedNavComponent";
import "./NavBar.css";
import scoopedLogo from "./img/scooped_logo.png";
import { useSelector } from "react-redux";

const NavBar = ({ loaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser?.id;

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <LoggedNavComponent userId={userId} />;
  } else {
    sessionLinks = <NonLoggedNavComponent />;
  }

  return (
    <div className="navbar-container">
      <div className="navbar-img-container" style={{ top: "15px" }}>
        <Link to="/">
          <img src={scoopedLogo} alt="logo" width="120px"></img>
        </Link>
      </div>
      <nav>
        <ul className="navbar-container-wrapper">
          <li>
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          {loaded && sessionLinks}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
