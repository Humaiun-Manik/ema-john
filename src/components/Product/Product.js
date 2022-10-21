import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, ratings, seller } = props.product;
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
      <button className="cart-btn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
