import React from "react";
import "./Footer.css";

import qrImg from "../../../../ảnh và logo/Qr Code.png";
import ggImg from "../../../../ảnh và logo/GooglePlay.png";
import apImg from "../../../../ảnh và logo/AppStore.png";

const Footer = () => {
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Exclusive</h3>
        <p>Subscribe</p>
        <span>Get 10% off your first order</span>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>&#10132;</button>
        </div>
      </div>

      <div className="footer-section">
        <h3>Support</h3>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="footer-section">
        <h3>Account</h3>
        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Quick Link</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Download App</h3>
        <p>Save $3 with App New User Only</p>
        <div className="app-links">
          <img src={qrImg} alt="QR Code" />
          <img src={ggImg} alt="Google Play" />
          <img src={apImg} alt="App Store" />
        </div>
        <div className="social-icons">
          <a>
            <img />
          </a>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Copyright Rimel 2022. All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
