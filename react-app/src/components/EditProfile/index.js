import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProfile } from "../../store/profile";
import { authenticate } from "../../store/session";

import "./editProfile.css";

function EditProfile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const curUserName = sessionUser.username;
  const userEmail = sessionUser.email;
  const [username, setUsername] = useState(curUserName);
  const [email, setEmail] = useState(userEmail);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const updateUserName = e => setUsername(e.target.value);
  const updateUserEmail = e => setEmail(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    const updatedProfile = {
      id: userId,
      username,
      email,
    };

    //error validators
    setErrors([]);

    const newErrors = [];

    if (updatedProfile.username.length < 4) {
      newErrors.push("Username must be 4 characters or more!");
    }
    if (updatedProfile.email.length < 4) {
      newErrors.push("Email must be 4 characters or more!");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    await dispatch(updateProfile(updatedProfile));
    await dispatch(authenticate());
    await history.push(`/users/${userId}`);
  };

  const handleCancel = async e => {
    e.preventDefault();
    history.push(`/users/${userId}`);
  };

  return (
    <section className="main">
      <form onSubmit={handleSubmit} className="container_col profile_edit_form">
        <div>
          <div className="container_row profile_edit_inputs">
            <input type="hidden" value={userId} />
            <div className="container_col">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username..."
                value={username}
                onChange={updateUserName}
              />
            </div>

            <div className="container_col">
              <label>Email</label>
              <input
                type="email"
                placeholder="New Email..."
                value={email}
                onChange={updateUserEmail}
              />
            </div>
          </div>

          <div className="error-container">
            <ul>
              {errors.map(err => (
                <li key={err} className="error">
                  {err}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container_row profile_edit_btns">
          <button type="Submit" className="confirm-button">
            Accept
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="delete-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
