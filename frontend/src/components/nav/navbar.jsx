import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    const logoutUser = e => {
        e.preventDefault();
        props.logout();
    }

    const getLinks = () => {
        if (props.loggedIn) {
            return (
                <div className="auth-links">
                    <button className="logout-button" onClick={logoutUser}>Logout</button>
                    <Link to={'/cart'}>My Cart</Link>
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