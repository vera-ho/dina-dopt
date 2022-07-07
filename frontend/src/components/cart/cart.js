import React, { useState, useEffect } from 'react';
import { fetchCart, createCart } from '../../util/cart_api_util';
import { useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCart().then((res) => {
      dispatch(createCart(res.data));
    });
  }, []);

  const cart = useSelector((state) => state.cart);

  const cartItems = cart.map((item) => {
    return (
      <li>
        Name: {item.name} - Quantity: {item.quantity}
      </li>
    );
  });

  return (
    <div>
      <div>My Cart</div>
      <div>
        <ul>{cartItems}</ul>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
