import React from 'react';
import { useDispatch } from 'react-redux';
import { receiveCart } from '../../actions/cart_actions';
import { clearCart } from '../../util/cart_api_util';
import { openModal } from '../../actions/modal_actions';

const CheckoutButton = (props) => {

    const dispatch = useDispatch();

    const handleCheckout = async (e) => {
        dispatch(openModal('checkout'))

        let newCart = await clearCart();
        dispatch(receiveCart(newCart.data));
    }

    return (
        <div className="checkout-button-container">
            <div className="checkout-button" onClick={handleCheckout}>
                Checkout
            </div>
        </div>
    )
}

export default CheckoutButton;