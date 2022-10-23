import React from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  let quantity = 0;
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + totalShipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
