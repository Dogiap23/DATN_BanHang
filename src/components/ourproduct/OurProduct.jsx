import React from "react";
import "./OurProduct.css";

const Ourproduct = ({ img, name, newprice, oldprice, rating }) => {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="price">
        <span className="new-price">${newprice}</span>{" "}
        {oldprice && <span className="old-price">${oldprice}</span>}
      </p>
      <div className="rating">{rating}</div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default Ourproduct;
