import React from "react";
import "./HomePage.css";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slideImg from "../ảnh và logo/Frame 560 (1).png"
import slideImg2 from "../ảnh và logo/iphone-16-9122.webp"
import slideImg3 from "../ảnh và logo/iphone-16-apple-1724425955959-1724425956166404526628.webp"
import slideImg4 from "../ảnh và logo/screenshot-2024-09-09-at-091936-1725848914766-1725848915006599069514.webp"

import saleImg from "../ảnh và logo/Frame 611.png"
import saleImg2 from "../ảnh và logo/Frame 612.png"
import saleImg3 from "../ảnh và logo/Frame 613.png"
import saleImg4 from "../ảnh và logo/Frame 614.png"

import phoneImg from "../ảnh và logo/Category-CellPhone.png"
import computeImg from "../ảnh và logo/Category-Computer.png"
import watchImg from "../ảnh và logo/Category-SmartWatch.png"
import cameraImg from "../ảnh và logo/Category-Camera.png"
import headImg from "../ảnh và logo/Category-Headphone.png"
import gamingImg from "../ảnh và logo/Category-Gamepad.png"

import aomuaImg from "../ảnh và logo/Frame 605.png"
import tuisachImg from "../ảnh và logo/Frame 606.png"
import loaImg from "../ảnh và logo/Frame 610.png"
import tuImg from "../ảnh và logo/Frame 612.png"

import pannerImg from "../ảnh và logo/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"

  const HomePage = () => {
    
  return (
    <div className="homepage-container">
      {/* Top Header */}
      <div className="top-header">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <button className="shop-now">Shop Now</button>
        <select className="language-selector">
          <option>English</option>
          <option>Vietnamese</option>
        </select>
      </div>

      {/* Main Header */}
      <header className="navbar">
        <h1 className="logo">Exclusive</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
        <input type="text" placeholder="What are you looking for?" className="search-box" />
      </header>

      

      {/* Categories Navigation */}
      <section className="categories-section">
        <div className="categories-container">
          <ul className="categories-list">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>iPhone 14 Series</li>
            <li>Home & Lifestyle</li>
            <li>Up to 10% off Voucher</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={slideImg} /></SwiperSlide>
      <SwiperSlide><img src={slideImg2} /></SwiperSlide>
      <SwiperSlide><img src={slideImg3} /></SwiperSlide>
      <SwiperSlide><img src={slideImg4} /></SwiperSlide>
    </Swiper>
      </section>

      {/* Flash Sales */}
      <section className="flash-sales">
      <div className="flash-sales-header">
    <span></span>
    <h3>Today's</h3>
  </div>
  <h2>Flash Sales</h2>
  <div className="countdown">
    <div>
      <span>03</span>
      <p>Days</p>
    </div>
    <span className="colon">:</span>
    <div>
      <span>23</span>
      <p>Hours</p>
    </div>
    <span className="colon">:</span>
    <div>
      <span>19</span>
      <p>Minutes</p>
    </div>
    <span className="colon">:</span>
    <div>
      <span>56</span>
      <p>Seconds</p>
    </div>
  </div>
  <div className="product-grid">
    <div className="product-card">
      <span className="discount">-40%</span>
      <img src={saleImg} alt="Gamepad" />
      <h3>HAVIT HV-G92 Gamepad</h3>
      <p><span className="new-price">$120</span> <span className="old-price">$160</span></p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
    <div className="product-card">
      <span className="discount">-35%</span>
      <img src={saleImg2} alt="Keyboard" />
      <h3>AK-900 Wired Keyboard</h3>
      <p><span className="new-price">$960</span> <span className="old-price">$1160</span></p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
    <div className="product-card">
      <span className="discount">-30%</span>
      <img src={saleImg3} alt="Monitor" />
      <h3>IPS LCD Gaming Monitor</h3>
      <p><span className="new-price">$370</span> <span className="old-price">$400</span></p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
    <div className="product-card">
      <span className="discount">-25%</span>
      <img src={saleImg4} alt="Chair" />
      <h3>S-Series Comfort Chair</h3>
      <p><span className="new-price">$375</span> <span className="old-price">$400</span></p>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  </div>
  <button className="view-all">View All Products</button>
</section>

<div className="homepage-container">
      {/* Categories Section - Updated */}
      <section className="categories">
      <div class="categories">
  <div class="categories-header">
    <span></span>
    <h3>Categories</h3>
  </div>
  <h2>Browse By Category</h2>
  <div class="category-grid">
        <div className="category-grid">
          <div className="category-item">
            <img src={phoneImg} alt="Phones" />
            <p>Phones</p>
          </div>
          <div className="category-item">
            <img src={computeImg} alt="Computers" />
            <p>Computers</p>
          </div>
          <div className="category-item">
            <img src={watchImg} alt="SmartWatch" />
            <p>SmartWatch</p>
          </div>
          <div className="category-item">
            <img src={cameraImg} alt="Camera" />
            <p>Camera</p>
          </div>
          <div className="category-item">
            <img src={headImg} alt="HeadPhones" />
            <p>HeadPhones</p>
          </div>
          <div className="category-item">
            <img src={gamingImg} alt="Gaming" />
            <p>Gaming</p>
          </div>
        </div>
  </div>
</div>
      </section>
    </div>

      {/* Featured Products */}
      <section class="best-selling">
  <div class="section-header">
    <span class="section-icon"></span>
    <h3>This Month</h3>
  </div>
  <h2>Best Selling Products</h2>
  <div class="product-grid">
    <div class="product-card">
    <img src={aomuaImg} alt="AoMua" />
      <h3>The north coat</h3>
      <p class="price"><span class="discount">$260</span> <span class="old-price">$360</span></p>
      <div class="rating">★★★★★ (65)</div>
    </div>
    <div class="product-card">
    <img src={tuisachImg} alt="TuiSach" />
      <h3>Gucci duffle bag</h3>
      <p class="price"><span class="discount">$960</span> <span class="old-price">$1160</span></p>
      <div class="rating">★★★★★ (65)</div>
    </div>
    <div class="product-card">
    <img src={loaImg} alt="Loa" />
      <h3>RGB liquid CPU Cooler</h3>
      <p class="price"><span class="discount">$160</span> <span class="old-price">$170</span></p>
      <div class="rating">★★★★★ (65)</div>
    </div>
    <div class="product-card">
    <img src={tuImg} alt="Tu" />
      <h3>Small BookShelf</h3>
      <p class="price"><span class="discount">$360</span></p>
      <div class="rating">★★★★★ (65)</div>
    </div>
  </div>
  <button class="view-all">View All</button>
</section>

<section class="promo-banner">
  <div class="promo-content">
    <h3 class="promo-category">Categories</h3>
    <h2>Enhance Your Music Experience</h2>
    <div class="countdown">
      <div><span id="hours">23</span> Hours</div>
      <div><span id="days">05</span> Days</div>
      <div><span id="minutes">59</span> Minutes</div>
      <div><span id="seconds">35</span> Seconds</div>
    </div>
    <button class="buy-now">Buy Now!</button>
  </div>
  <div class="promo-image">
    <img src={pannerImg} alt="JBL Speaker" />
  </div>
</section>

<section>
  
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h3>Exclusive</h3>
            <p>111 Bijoy sarani, Dhaka, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p>&copy; 2022 Rimel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
