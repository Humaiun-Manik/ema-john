import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogIn} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" required />
          </div>
          {loading && <p>loading...</p>}
          <input className="submit-btn" type="submit" value="Login" />
        </form>
        <p style={{ color: "red" }}>{error?.message}</p>
        <p className="form-link-container">
          New to Ema-john?
          <Link className="form-link" to={"/signup"}>
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
