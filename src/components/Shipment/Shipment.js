import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Shipment.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleUserInformation = (e) => {
    e.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };

  return (
    <div id="shipment" className="form-container">
      <div>
        <h1 className="form-title">Shipping Information</h1>
        <form onSubmit={handleUserInformation} action="">
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={(e) => setName(e.target.value)} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={(e) => setAddress(e.target.value)} type="text" name="address" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input onBlur={(e) => setPhone(e.target.value)} type="number    " name="phone-number" required />
          </div>
          <p style={{ color: "red" }}>{error.message}</p>
          <input className="submit-btn" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
