import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  console.log(product);
  const { img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div className="review-item-img">
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-detail">
          <h4>{name}</h4>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
          <p>
            Shipping Charge: <span>${shipping}</span>
          </p>
        </div>
        <div className="delete-container"></div>
      </div>
    </div>
  );
};

export default ReviewItem;
