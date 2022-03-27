import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        Book Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          Carts
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;