import React from "react";
import "./HomePage.css";

import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slideImg from "../../ảnh và logo/Frame 560 (1).png";
import slideImg2 from "../../ảnh và logo/iphone-16-9122.webp";
import slideImg3 from "../../ảnh và logo/iphone-16-apple-1724425955959-1724425956166404526628.webp";
import slideImg4 from "../../ảnh và logo/screenshot-2024-09-09-at-091936-1725848914766-1725848915006599069514.webp";

import phoneImg from "../../ảnh và logo/Category-CellPhone.png";
import computeImg from "../../ảnh và logo/Category-Computer.png";
import watchImg from "../../ảnh và logo/Category-SmartWatch.png";
import cameraImg from "../../ảnh và logo/Category-Camera.png";
import headImg from "../../ảnh và logo/Category-Headphone.png";
import gamingImg from "../../ảnh và logo/Category-Gamepad.png";

import saleImg from "../../ảnh và logo/Frame 611.png";
import banphimImg from "../../ảnh và logo/ak-900-01-500x500 1.png";
import manhinhImg from "../../ảnh và logo/g27cq4-500x500 1.png";
import gheImg from "../../ảnh và logo/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";

import aomuaImg from "../../ảnh và logo/Frame 605.png";
import tuisachImg from "../../ảnh và logo/Frame 606.png";
import loaImg from "../../ảnh và logo/Frame 610.png";
import tuImg from "../../ảnh và logo/Frame 612.png";

import pannerImg from "../../ảnh và logo/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

import dogfoodImg from "../../ảnh và logo/71RdoeXxtrL 1.png";
import canonImg from "../../ảnh và logo/eos-250d-03-500x500 1.png";
import asusImg from "../../ảnh và logo/ideapad-gaming-3i-01-500x500 1.png";
import curologyImg from "../../ảnh và logo/curology-j7pKVQrTUsM-unsplash 1.png";
import kidcarImg from "../../ảnh và logo/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import soccerImg from "../../ảnh và logo/Copa_Sense 1.png";
import gamepadImg from "../../ảnh và logo/GP11_PRD3 1.png";
import jacketImg from "../../ảnh và logo/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";

import ps5Img from "../../ảnh và logo/ps5-slim-goedkope-playstation_large 1.png";
import womenImg from "../../ảnh và logo/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakerImg from "../../ảnh và logo/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import perfumeImg from "../../ảnh và logo/652e82cd70aa6522dd785109a455904c.png";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Item from "../../components/item/Item";
import Categories from "../../components/categories/Categories";
import Browse from "../../components/browse/Browse";
import Bestselling from "../../components/bestselling/BestSelling";
import Ourproduct from "../../components/ourproduct/OurProduct";
import NewArrival from "../../components/newarrival/NewArrival";

import freeImg from "../../ảnh và logo/Services.png";
import hotImg from "../../ảnh và logo/Services (1).png";
import backImg from "../../ảnh và logo/Services (2).png";

const HomePage = () => {
  const slide = [
    {
      image: slideImg,
    },

    {
      image: slideImg2,
    },

    {
      image: slideImg3,
    },

    {
      image: slideImg4,
    },
  ];

  const categories = [
    {
      name: "Woman’s Fashion",
    },
    {
      name: "Men’s Fashion",
    },
    {
      name: "Electronics",
    },
    {
      name: "Home & Lifestyle",
    },
    {
      name: "Medicine",
    },
    {
      name: "Sports & Outdoor",
    },
    {
      name: "Baby’s & Toys",
    },
    {
      name: "Groceries & Pets",
    },
    {
      name: "Health & Beauty",
    },
  ];

  const saleProduct = [
    {
      id: 1,
      discount: 40,
      img: saleImg,
      name: "HAVIT HV-G92 Gamepad",
      newPrice: 120,
      oldPrice: 160,
      rating: "⭐⭐⭐⭐⭐",
      reviewers: "(88)",
    },

    {
      id: 2,
      discount: 35,
      img: banphimImg,
      name: "AK-900 Wired Keyboard",
      newPrice: 960,
      oldPrice: 1160,
      rating: "⭐⭐⭐⭐⭐",
      reviewers: "(88)",
    },

    {
      id: 3,
      discount: 30,
      img: manhinhImg,
      name: "IPS LCD Gaming Monitor",
      newPrice: 370,
      oldPrice: 400,
      rating: "⭐⭐⭐⭐⭐",
      reviewers: "(88)",
    },

    {
      id: 4,
      discount: 25,
      img: gheImg,
      name: "hS-Series Comfort Chair j",
      newPrice: 375,
      oldPrice: 400,
      rating: "⭐⭐⭐⭐⭐",
      reviewers: "(88)",
    },
  ];

  const browse = [
    {
      img: phoneImg,
      name: "Phones",
    },
    {
      img: computeImg,
      name: "Computers",
    },
    {
      img: watchImg,
      name: "SmartWatch",
    },
    {
      img: cameraImg,
      name: "Camera",
    },
    {
      img: headImg,
      name: "HeadPhones",
    },
    {
      img: gamingImg,
      name: "Gaming",
    },
  ];

  const best = [
    {
      img: aomuaImg,
      name: "The north coat",

      newprice: 260,
      oldprice: 360,
    },
    {
      img: tuisachImg,
      name: "Gucci duffle bag",
      newprice: 960,
      oldprice: 1160,
    },
    {
      img: loaImg,
      name: "RGB liquid CPU Cooler",
      newprice: 160,
      oldprice: 170,
    },
    {
      img: tuImg,
      name: "Small BookSelf",
      newprice: 360,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      newprice: 375,
      oldprice: 400,
      rating: 3,
      reviews: 35,
      image: dogfoodImg,
      button: "Add To Cart",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      newprice: 375,
      oldprice: 400,
      rating: 4,
      reviews: 95,
      image: canonImg,
      button: "Add To Cart",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      newprice: 375,
      oldprice: 400,
      rating: 5,
      reviews: 325,
      image: asusImg,
      button: "Add To Cart",
    },
    {
      id: 4,
      name: "Curology Product Set",
      newprice: 375,
      oldprice: 400,
      rating: 4,
      reviews: 145,
      image: curologyImg,
      button: "Add To Cart",
    },
    {
      id: 5,
      name: "Kids Electric Car",
      newprice: 375,
      oldprice: 400,
      rating: 5,
      reviews: 65,
      image: kidcarImg,
      tag: "NEW",
      button: "Add To Cart",
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      newprice: 375,
      oldprice: 400,
      rating: 3,
      reviews: 35,
      image: soccerImg,
      button: "Add To Cart",
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      newprice: 375,
      oldprice: 400,
      rating: 5,
      reviews: 55,
      image: gamepadImg,
      tag: "NEW",
      button: "Add To Cart",
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      newprice: 375,
      oldprice: 400,
      rating: 4,
      reviews: 55,
      image: jacketImg,
      button: "Add To Cart",
    },
  ];

  const arrivals = [
    {
      img: ps5Img,
      name: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      size: "large",
    },
    {
      img: womenImg,
      name: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
    },
    {
      img: speakerImg,
      name: "Speakers",
      description: "Amazon wireless speakers",
    },
    {
      img: perfumeImg,
      name: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
    },
  ];

  const services = [
    {
      img: freeImg,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      img: hotImg,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      img: backImg,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="homepage-container">
      <Header />
    
    

      <section className="categories-section">
        <div className="categories-container">
          <ul className="categories-list">
            {categories.map((item) => (
              <Categories name={item.name} />
            ))}
          </ul>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slide.map((item) => (
            <SwiperSlide>
              <img src={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

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
          {saleProduct.map((item) => (
            <Item
              discount={item.discount}
              img={item.img}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              rating={item.rating}
              reviewers={item.reviewers}
            />
          ))}
        </div>

        <button className="view-all">View All Products</button>
      </section>

      <div className="homepage-container">
        <section className="categories">
          <div class="categories">
            <div class="categories-header">
              <span></span>
              <h3>Categories</h3>
            </div>
            <h2>Browse By Category</h2>
            <div class="category-grid">
              {browse.map((item) => (
                <Browse img={item.img} name={item.name} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section class="best-selling">
        <div class="section-header">
          <span class="section-icon"></span>
          <h3 class="section-category">This Month</h3>
        </div>

        <h2 class="section-title">Best Selling Products</h2>
        <button class="view-all">View All</button>
        <div class="product-grid">
          {best.map((item) => (
            <Bestselling
              img={item.img}
              name={item.name}
              newprice={item.newprice}
              oldprice={item.oldprice}
              rating={item.rating}
            />
          ))}
        </div>
      </section>

      <section class="promo-banner">
        <div class="promo-content">
          <h3 class="promo-category">Categories</h3>
          <h2>Enhance Your Music Experience</h2>
          <div class="countdown">
            <div>
              <span id="hours">23</span> Hours
            </div>
            <div>
              <span id="days">05</span> Days
            </div>
            <div>
              <span id="minutes">59</span> Minutes
            </div>
            <div>
              <span id="seconds">35</span> Seconds
            </div>
          </div>
          <button class="buy-now">Buy Now!</button>
        </div>
        <div class="promo-image">
          <img src={pannerImg} alt="JBL Speaker" />
        </div>
      </section>

      <section className="best-selling">
        <div className="section-header">
          <span className="section-icon"></span>
          <h3 className="section-category">Our Products</h3>
        </div>
        <h2 class="section-title">Explore Our Products</h2>
        <div className="product-grid">
          {products.map((item) => (
            <Ourproduct
              img={item.image}
              name={item.name}
              newprice={item.newprice}
              oldprice={item.oldprice}
              rating={item.rating}
            />
          ))}
        </div>
        <button className="view-all">View All Products</button>
      </section>

            <section className="new-arrival">
        <div className="section-header">
          <span className="section-icon"></span>
          <h3 className="section-category">Featured</h3>
        </div>
        <h2 className="section-title">New Arrival</h2>
        <div className="arrival-content">
          {arrivals.map((item, index) => (
            <NewArrival
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
              size={item.size}
            />
          ))}
        </div>
      </section>

        <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-icon-wrapper">
              <div className="service-icon">
              <img src={service.img} alt={service.title} />
              </div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
