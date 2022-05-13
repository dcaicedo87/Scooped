import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { signUp } from "../../store/session";
import Footer from "../Footer";
import scoopedLogo from "../img/scooped_logo.png";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async e => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = e => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div id="bg-signup"></div>
      <div className="signup-logo">
        <img src={scoopedLogo} alt=""></img>
      </div>
      <form onSubmit={onSignUp}>
        <div className="errors-field-container">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="form-field">
          {/* <label>User Name</label> */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-field">
          {/* <label>Email</label> */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="form-field">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="form-field">
          {/* <label>Repeat Password</label> */}
          <input
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="form-field">
          <button className="button-signup" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          <NavLink className="log-in-link" to="/login">
            Already have an account? Log In Here!
          </NavLink>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default SignUpForm;
