import React from "react";
import { Link } from "react-router-dom"; 
import Header from "../homepage/components/header/Header"; 
import Footer from "../homepage/components/footer/Footer"; 
import "./SignUp.css";

import anhImg from "../../ảnh và logo/dl.beatsnoop 1.png";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="signup-main">
        <div className="signup-image">
          <img
            src={anhImg} 
            alt="Shopping cart and phone"
          />
        </div>
        <div className="signup-form">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="create-account">
              Create Account
            </button>
            <button type="button" className="google-signup">
              Sign up with Google
            </button>
          </form>
          <p> 
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;