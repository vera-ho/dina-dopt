import React, { useState } from 'react';
import { addToCart, removeFromCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';

const CartPlusButton = (props) => {
  const dispatch = useDispatch();

  const { petId } = props;
  console.log('plus button pet', petId)

  const handleAddPetQty = async (e) => {
    e.preventDefault();
    let newCart = await addToCart(petId);
    return dispatch(receiveCart(newCart.data));
  };

  return (
    <span onClick={handleAddPetQty}>+</span>
  )
};

export default CartPlusButton;