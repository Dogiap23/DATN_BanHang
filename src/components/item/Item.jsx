import React from "react";
import "./Item.css";

const Item = ({discount, img, name, newPrice, oldPrice, rating,reviewers}) => {
  return (
    <div className="product-card">
      <span className="discount">{discount}%</span>
      <img src={img} alt="Gamepad" />
      <h3>{name}</h3>
      <p>
        <span className="new-price">${newPrice}</span>{" "}
        <span className="old-price">${oldPrice}</span>
      </p>
      <div class="rating">{rating}</div>
      <div class="reviewers">{reviewers}</div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default Item;
