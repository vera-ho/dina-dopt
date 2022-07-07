import React, { useEffect } from 'react';
import { fetchCart } from '../../util/cart_api_util';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCart } from '../../actions/cart_actions';

const CartShow = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let cart = await fetchCart();
    dispatch(receiveCart(cart.data))
  }

  const cart = useSelector((state) => state.entities.cart);
  // console.log(cart)

  if (!cart) return null;

  return (
    <div className="cart-show-container">
      <div>My Cart</div>
      <div>
        {
          cart.items?.map(item => {
            return (
              <div>
                Name: {item.name} - Quantity: {item.quantity}
              </div>
            )
          })
        }
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartShow;
