import React from 'react';
import { removeFromCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';

const RemoveFromCartButton = (props) => {

    

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newCart = await removeFromCart(props.petId);
        return dispatch(receiveCart(newCart.data));
    };

    return (
        <div className="add-to-cart-button atc-card-button">
        <button onClick={handleSubmit}>Remove From Cart</button>
        </div>
    );
};

export default RemoveFromCartButton;