import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleCreateUser} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirm-password"
              required
            />
          </div>
          <input className="submit-btn" type="submit" value="Sign Up" />
        </form>
        <p style={{ color: "red" }}>{error}</p>
        <p className="form-link-container">
          Already have an account?
          <Link className="form-link" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
