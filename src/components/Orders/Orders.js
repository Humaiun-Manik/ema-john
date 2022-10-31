import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart.js";
import useProducts from "../../hooks/useProducts.js";
import { removeFromDb } from "../../utilities/fakedb.js";
import Cart from "../Cart/Cart.js";
import ReviewItem from "../ReviewItem/ReviewItem.js";
import "./Orders.css";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
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
