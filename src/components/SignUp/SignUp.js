import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="submit-btn" type="submit" value="Login" />
        </form>
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

export default SignUp;
