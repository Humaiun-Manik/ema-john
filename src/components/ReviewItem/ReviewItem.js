import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { img, name, price, quantity, shipping } = product;

  return (
    <div className="review-item">
      <div className="review-item-img">
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-detail">
          <p className="item-name" title={name}>
            {name.length > 25 ? name.slice(0, 25) + "..." : name}
          </p>
          <p>
            Price: <span className="orange-color">${price}</span>
          </p>
          <p>
            Quantity: <span className="orange-color">{quantity}</span>
          </p>
          <p>
            <small>
              Shipping Charge: <span className="orange-color">${shipping}</span>
            </small>
          </p>
        </div>
        <div className="delete-container">
          <button className="delete-btn" onClick={() => handleRemoveProduct(product)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
