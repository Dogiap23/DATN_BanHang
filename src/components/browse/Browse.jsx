import React from "react";
import "./Browse.css";

const Browse = ({ img, name }) => {
  return (
    <div className="category-grid">
      <div className="category-item">
        <img src={img} alt="Phones" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Browse;
