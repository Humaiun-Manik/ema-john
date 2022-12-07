import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart.js";
import { removeFromDb } from "../../utilities/fakedb.js";
import Cart from "../Cart/Cart.js";
import ReviewItem from "../ReviewItem/ReviewItem.js";
import "./Orders.css";

const Orders = () => {
  const [cart, setCart] = useCart();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/shipment"}>Proceed Shipping</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
