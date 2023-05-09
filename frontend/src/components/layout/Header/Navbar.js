import React, { useState } from 'react';import './Navbar.css';
// import logo from './logo.svg';
// import searchIcon from './search-icon.svg';
// import cartIcon from './cart-icon.svg';
// import userIcon from './user-icon.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  return (
    <nav className="navbar" style={{zIndex: 20} }>
    <div className="navbar__left">
      <img className="navbar__logo"  alt="Logo" />
    </div>
    <div className="navbar__middle">
      <Link to='/' className="navbar__link">Home</Link>
      <Link to='/products' className="navbar__link">Products</Link>
      <Link to='/contacts' className="navbar__link">Contact</Link>
      <Link to='/about' className="navbar__link">About</Link>
      
    </div>
    <div className="navbar__right">
     <img className="navbar__icon"  alt="Search" />
      <img className="navbar__icon"  alt="Cart" />
      <div className="navbar__dropdown" onClick={handleProfileClick}>
        <img className="navbar__icon"  alt="User" />
        {showProfileDropdown && (
          <div className="navbar__dropdown-menu">
            <Link to='/admin/dashboard' className="navbar__dropdown-link">Orders</Link>
            <Link to='/account' className="navbar__dropdown-link">Profile</Link>
            <Link to='/cart' className="navbar__dropdown-link">Cart</Link>
            <Link to='/login' className="navbar__dropdown-link">Logout</Link>
          </div>
        )}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
