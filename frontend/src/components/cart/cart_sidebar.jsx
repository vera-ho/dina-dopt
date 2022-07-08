import React, { useEffect } from 'react';
import { fetchCart } from '../../util/cart_api_util';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCart } from '../../actions/cart_actions';

const CartSidebar = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let cart = await fetchCart();
        console.log(cart.data)
        dispatch(receiveCart(cart.data))
    }

    const cart = useSelector((state) => state.entities.cart);
    console.log(cart)

    if (!cart) return null;

    const handleCloseSidebar = (e) => {
        e.preventDefault();

        const cartSidebar = document.getElementById("cart-sidebar-container")
        cartSidebar.classList.remove('active')
    }
    
    return (
        <div id="cart-sidebar-container">
            <div className="sidebar-close-header">
                <button onClick={handleCloseSidebar} className="close-sidebar-button">&times;</button>
            </div>
        </div>
    )
}

export default CartSidebar;