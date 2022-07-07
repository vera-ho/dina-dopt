import React from 'react';
import { addToCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';
import { useDispatch } from 'react-redux';

const AddToCartButton = (props) => {
  // console.log(props)

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newCart = await addToCart(props.petId);
    return dispatch(receiveCart(newCart.data));
  };

  return (
    <div className="add-to-cart-button atc-card-button">
      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
