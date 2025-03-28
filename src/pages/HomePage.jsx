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

import dogfoodImg from "../ảnh và logo/71RdoeXxtrL 1.png"
import canonImg from "../ảnh và logo/eos-250d-03-500x500 1.png"
import asusImg from "../ảnh và logo/ideapad-gaming-3i-01-500x500 1.png"
import curologyImg from "../ảnh và logo/curology-j7pKVQrTUsM-unsplash 1.png"
import kidcarImg from "../ảnh và logo/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png"
import soccerImg from "../ảnh và logo/Copa_Sense 1.png"
import gamepadImg from "../ảnh và logo/GP11_PRD3 1.png"
import jacketImg from "../ảnh và logo/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"

import ps5Img from "../ảnh và logo/ps5-slim-goedkope-playstation_large 1.png"
import womenImg from "../ảnh và logo/attractive-woman-wearing-hat-posing-black-background 1.png"
import speakerImg from "../ảnh và logo/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import perfumeImg from "../ảnh và logo/652e82cd70aa6522dd785109a455904c.png"

import qrImg from "../ảnh và logo/Qr Code.png"
import ggImg from "../ảnh và logo/GooglePlay.png"
import apImg from "../ảnh và logo/AppStore.png"



const HomePage = () => {

  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      reviews: 35,
      image: dogfoodImg,
      button: "Add To Cart",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      reviews: 95,
      image: canonImg,
      button: "Add To Cart",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
      image: asusImg,
      button: "Add To Cart",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4,
      reviews: 145,
      image: curologyImg,
      button: "Add To Cart",
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 5,
      reviews: 65,
      image: kidcarImg,
      tag: "NEW",
      button: "Add To Cart",
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 3,
      reviews: 35,
      image: soccerImg,
      button: "Add To Cart",
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 5,
      reviews: 55,
      image: gamepadImg,
      tag: "NEW",
      button: "Add To Cart",
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4,
      reviews: 55,
      image: jacketImg,
      button: "Add To Cart",
    },
  ];

  const services = [
    {
      icon: "🚚",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "🎧",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "✔️",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

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
          <h3 class="section-category">This Month</h3>
        </div>
        <h2 class="section-title">Best Selling Products</h2>
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

      <section className="best-selling">
        <div class="section-header">
          <span class="section-icon"></span>
          <h3 class="section-category">Our Products</h3>
        </div>
        <h2 class="section-title">Explore Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.tag && <span className="tag">{product.tag}</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              {product.button ? (
                <button className="add-to-cart">{product.button}</button>
              ) : null}
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <div className="rating">
                {"⭐".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className="reviews"> ({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all">View All Products</button>
      </section>


      <section class="new-arrival">
        <div class="section-header">
          <span class="section-icon"></span>
          <h3 class="section-category">Featured</h3>
        </div>
        <h2 class="section-title">New Arrival</h2>
        <div class="arrival-content">
          <div class="arrival-left">
            <div class="product-box large">
              <img src={ps5Img} alt="PlayStation 5" />        <div class="product-info">
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button class="shop-now">Shop Now</button>
              </div>
            </div>
          </div>
          <div class="arrival-right">
            <div class="product-box dark-bg">
              <img src={womenImg} alt="Women's Collections" />        <div class="product-info">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <button class="shop-now">Shop Now</button>
              </div>
            </div>
            <div class="arrival-bottom">
              <div class="product-box dark-bg">
                <img src={speakerImg} alt="Speakers" />          <div class="product-info">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <button class="shop-now">Shop Now</button>
                </div>
              </div>
              <div class="product-box dark-bg">
                <img src={perfumeImg} alt="Perfume" />          <div class="product-info">
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <button class="shop-now">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
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
              <a><img /></a>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
