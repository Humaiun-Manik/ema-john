import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  //   const { handleAddToCart, product } = props.product;
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} start</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="cart-btn">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
