import React from 'react';
import { createCart, addToCart } from '../../util/cart_api_util';

const AddToCartButton = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newCart = await addToCart(props.petId);
    return dispatch(createCart(newCart.data));
  };

  return (
    <div className="add-to-cart-button">
      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
