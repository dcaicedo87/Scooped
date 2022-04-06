import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./LogoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async e => {
    await dispatch(logout());
    // setLoaded(false);
  };

  return (
    <button onClick={onLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default LogoutButton;
