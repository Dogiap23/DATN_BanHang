import React from "react";
import Header from "../homepage/components/header/Header";
import Footer from "../homepage/components/footer/Footer";

import storyImg from "../../ảnh và logo/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"; 

import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a wide
              range of tailored marketing, data, and service solutions, Exclusive has
              10,500 sellers and 300 brands and serves 3 million customers across the
              region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very
              fast pace. Exclusive offers a diverse assortment in categories ranging
              from consumer.
            </p>
          </div>
          <div className="about-image">
            <img src={storyImg} alt="Shopping story" />
          </div>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default About;