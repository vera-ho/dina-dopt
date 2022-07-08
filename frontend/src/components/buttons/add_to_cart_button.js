import React, { useState } from 'react';
import { addToCart, removeFromCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';

const AddToCartButton = (props) => {

  const dispatch = useDispatch();

  const { cartItems, petId } = props

  const [ added, setAdded ] = useState(() => {
    return cartItems.includes(petId);
  })

  const handleATC = async (e) => {
    e.preventDefault();
    setAdded(!added);
    let newCart = await addToCart(petId);
    return dispatch(receiveCart(newCart.data));
  };

  const handleRFC = async (e) => {
    e.preventDefault();
    setAdded(!added);
    let newCart = await removeFromCart(petId);
    return dispatch(receiveCart(newCart.data));
  };

  const addButton = () => {
    return (
      <div className="add-to-cart-button atc-card-button">
        <button onClick={handleATC}>Add to Cart</button>
      </div>
    );
  }

  const removeButton = () => {
    return (
      <div className="add-to-cart-button atc-card-button">
        <button onClick={handleRFC}>Remove</button>
      </div>
    );
  }

  return added ? removeButton() : addButton();
};

export default AddToCartButton;
