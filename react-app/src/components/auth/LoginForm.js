import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../store/session";
// import { useHistory } from "react-router-dom";
import scoopedLogo from "../img/scooped_logo.png";
import "./LoginForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  // const history = useHistory();

  const onLogin = async e => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmitDemo = async (e) => {
    e.preventDefault();
    const demoEmail = "demo@aa.io"
    const demoPassword = "password"
    await dispatch(login(demoEmail, demoPassword)
    )
  };

  // const handleSignUp = async e => {
  //   e.preventDefault();
  //   history.push(`/sign-up`);
  // };

  return (
    <>
      <div id="bg-login"></div>
      <div className="logo">
        <img src={scoopedLogo} alt="logo"></img>
      </div>
      <form onSubmit={onLogin}>
        <div className="errors-field-container">
          {errors.map((error, ind) => (
            <div className="errors-field" key={ind}>
              {error}
            </div>
          ))}
        </div>
        <div className="form-field">
          {/* <label htmlFor='email'>Email</label> */}
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="form-field">
          {/* <label htmlFor='password'>Password</label> */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className="form-field">
          <button className="button-login" type="submit">
            Login
          </button>
        <div>
          <button className="demo-login-btn button-login" onClick={handleSubmitDemo}>
            DEMO USER
          </button>
        </div>
        </div>
        <div className="form-field">
          {/* <button className="btn" onClick={handleSignUp}>Sign Up</button> */}
        </div>
        <div>
          <NavLink className="sign-up-link" to="/sign-up">
            Don't have an account? Sign Up Here!
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
