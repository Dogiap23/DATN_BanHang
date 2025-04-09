import React from "react";
import Header from "../homepage/components/header/Header";
import Footer from "../homepage/components/footer/Footer";
import anhImg from "../../ảnh và logo/dl.beatsnoop 1.png"
import "./LogIn.css";

const LogIn = () => {
  return (
    <>
      <Header />
      <main className="login-main">
        <div className="login-image">
          <img src={anhImg} alt="Shopping cart and phone" />
        </div>
        <div className="login-form">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form>
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <p>
            <a href="#" className="forgot-password">Forget Password?</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LogIn;