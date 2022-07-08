import React from 'react';
import { Link } from 'react-router-dom'
import CartSidebarContainer from '../cart/cart_sidebar_container';

const NavBar = props => {

    const logoutUser = e => {
        e.preventDefault();
        props.logout();
    }

    const handleOpenCartSidebar = (e) => {
        e.preventDefault();

        const cartSidebar = document.getElementById("cart-sidebar-container")
        cartSidebar.classList.add('active')
    }

    const getLinks = () => {
        if (props.loggedIn) {
            return (
                <div className="auth-links">
                    <button className="logout-button" onClick={logoutUser}>Logout</button>
                    <button onClick={handleOpenCartSidebar}>My Cart</button>
                    <CartSidebarContainer />
                </div>
            );
        } else {
            return (
                <div className="unauth-links">
                    <Link to={'/signup'}>Signup</Link>
                </div>
            );
        }
    }

    return (
        <div className="nav-container">
            <div className="nav-content">
                <div className="about-container">
                    <Link to="/about">About</Link>
                </div>
                <div className="title-container">
                    <Link to="/">
                        <h1>Dina-Dopt</h1>
                    </Link>
                </div>
                {getLinks()}
            </div>
        </div>
    )
}

export default NavBar;