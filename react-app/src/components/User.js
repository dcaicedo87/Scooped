import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="main">
      <ul className="container_col profile_header">
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        <Link to={`/users/${userId}/edit`}>
          <button className="edit-button">Edit</button>
        </Link>
      </ul>
      {/* Review Feed in profile page below?? */}
    </div>
  );
}
export default User;
