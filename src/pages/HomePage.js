import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1 className="logo">E-Commerce</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h2>Welcome to Our Store</h2>
        <p>Find the best products at the best prices</p>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          <div className="category-item">Category 1</div>
          <div className="category-item">Category 2</div>
          <div className="category-item">Category 3</div>
          <div className="category-item">Category 4</div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-item">Product 1</div>
          <div className="product-item">Product 2</div>
          <div className="product-item">Product 3</div>
          <div className="product-item">Product 4</div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
