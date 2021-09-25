import React from 'react';
import logo from '../../images/logo.png';
import '../Header.css';
const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
            <h1>Top 10 most charitable person in the world 2021!!!</h1>
            <h1>meet generous people</h1>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;