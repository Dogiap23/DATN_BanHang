import React from "react";
import "./NewArrival.css";

const NewArrival = ({ img, name, description, size }) => {
  return (
    <div className={`product-box ${size === "large" ? "large" : "dark-bg"}`}>
      <img src={img} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
};

export default NewArrival;