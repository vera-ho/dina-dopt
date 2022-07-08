import React, { useState } from 'react';
import { addToCart, removeFromCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';

const AddToCartButton = (props) => {
  const dispatch = useDispatch();

  const { cartItems, pet } = props;

  // console.log(cartItems, pet);

  const [added, setAdded] = useState(() => {
    return cartItems.includes(pet._id);
  });

  const handleATC = async (e) => {
    e.preventDefault();
    setAdded(!added);
    let newCart = await addToCart(pet);
    return dispatch(receiveCart(newCart.data));
  };

  const handleRFC = async (e) => {
    e.preventDefault();
    setAdded(!added);
    let newCart = await removeFromCart(pet._id);
    return dispatch(receiveCart(newCart.data));
  };

  const addButton = () => {
    return (
      <div className="add-to-cart-button atc-card-button">
        <button onClick={handleATC}>Add to Cart</button>
      </div>
    );
  };

  const removeButton = () => {
    return (
      <div className="add-to-cart-button atc-card-button">
        <button onClick={handleRFC}>Remove</button>
      </div>
    );
  };

  return added ? removeButton() : addButton();
};

export default AddToCartButton;
