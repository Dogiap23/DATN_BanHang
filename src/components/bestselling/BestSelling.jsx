import React from "react";
import "./BestSelling.css";
const Bestselling = ({ img, name, discount, newprice, oldprice, rating }) => {
  return (
    <div class="product-card">
      <img src={img} alt="AoMua" />
      <h3>{name}</h3>
      <p class="price">
        <span className="new-price">${newprice}</span>{" "}
        <span class="old-price">${oldprice}</span>
      </p>
      <div class="rating">{rating}</div>
    </div>
  );
};

export default Bestselling;
