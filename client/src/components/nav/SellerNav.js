import React from "react";
import { Link } from "react-router-dom";

const SellerNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/seller/history" className="nav-link">
          seller History
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/seller/password" className="nav-link">
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/seller/wishlist" className="nav-link">
          Wishlist
        </Link>
      </li>
    </ul>
  </nav>
);

export default SellerNav;
