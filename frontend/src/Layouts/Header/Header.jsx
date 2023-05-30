import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="full-header">
        <div className="container">
          <div className="header">
            <div className="icon">
              <img
                src="https://preview.colorlib.com/theme/theestate/images/logo.png"
                alt=""
              />
              <p className="the">THE ESTATE</p>
            </div>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li>ABOUT US</li>
              <li>LISTINGS</li>
              <li>NEWS</li>
              <li><Link to="/add-card">Add Card</Link></li>
            </ul>
            <p className="num">+0080 234 567 84441</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
