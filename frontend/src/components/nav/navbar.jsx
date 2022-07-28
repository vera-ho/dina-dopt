import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import CartSidebarContainer from '../cart/cart_sidebar_container';
import { fetchCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';

const NavBar = props => {

    const dispatch = useDispatch();

    const { cartItems, loggedIn } = props;

    useEffect(() => {
        if (loggedIn) {
            fetchCartData();
        }
    }, [])

    const fetchCartData = async () => {
        let cart = await fetchCart();
        dispatch(receiveCart(cart.data));
    }

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
                    <div className='my-cart-container'>
                        <button onClick={handleOpenCartSidebar}>My Cart</button>
                        {cartItems.length >= 1 &&
                        <div className="cart-notification-container">
                            <p>{cartItems.length}</p>
                        </div>
                        }
                    </div>
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