import React from "react";
import useCart from "../../hooks/useCart.js";
import useProducts from "../../hooks/useProducts.js";
import Cart from "../Cart/Cart.js";
import ReviewItem from "../ReviewItem/ReviewItem.js";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
