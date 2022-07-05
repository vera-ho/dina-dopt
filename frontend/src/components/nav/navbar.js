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
                <div>
                    <button onClick={logoutUser}>Logout</button>
                    <Link to={'/cart'}>My Cart</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
     }

    return (
        <div>
            <h1>Dina-Dopt</h1>
            { getLinks() }
        </div>
    )
}

export default NavBar;