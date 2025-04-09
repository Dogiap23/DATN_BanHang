import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <div className="homepage-container">
      <div className="top-header">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="shop-now">Shop Now</button>
        <select className="language-selector">
          <option>English</option>
          <option>Vietnamese</option>
        </select>
      </div>

      <header className="navbar">
        <h1 className="logo">Exclusive</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-box"
        />
      </header>
    </div>
  );
};

export default Header;
