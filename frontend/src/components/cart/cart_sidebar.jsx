import React, { useEffect } from 'react';
import { fetchCart } from '../../util/cart_api_util';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCart } from '../../actions/cart_actions';
import { requestAllPets, receiveAllPets } from '../../actions/pet_actions';
import { getPets } from '../../util/pet_util';
import { addToCart } from '../../util/cart_api_util';
import CartPlusButton from '../buttons/cart_plus_button';
import CartMinusButton from '../buttons/cart_minus_button';
import RemoveAllButton from '../buttons/remove_all_button';

const CartSidebar = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let cart = await fetchCart();
    dispatch(receiveCart(cart.data));
    let pets = await getPets();
    dispatch(receiveAllPets(pets.data));
  };

  const { cartItemPets } = props;
  const cart = useSelector((state) => state.entities.cart);

  if (!cart) return null;

  const handleCloseSidebar = (e) => {
    e.preventDefault();

    const cartSidebar = document.getElementById('cart-sidebar-container');
    cartSidebar.classList.remove('active');
  };

  const handleAddPetQty = async (pet) => {
    let newCart = await addToCart(pet);
    dispatch(receiveCart(newCart.data));
  };

  const totalPrice = () => {
    let sum = 0;
    cartItemPets.forEach((pet) => {
      sum += pet.total;
    });
    return sum;
  };

  if (!cart || !cartItemPets) return null;

  return (
    <div id="cart-sidebar-container">
      <div className="sidebar-close-header">
        <button onClick={handleCloseSidebar} className="close-sidebar-button">
          &times;
        </button>
        <div className="cart-sidebar-info-container">
          <p>Cart ({cartItemPets.length})</p>
        </div>
      </div>
      <div className="cart-sidebar-pets-container">
        <div className="cart-sidebar-pets-content">
          <div className="cart-item-header">
            <div className="cart-item-name-header">Pet</div>
            <div className="cart-item-qty-header">QTY</div>
            <div className="cart-item-price-header">$$$</div>
          </div>
          {cartItemPets.map((pet, idx) => {
            return (
              <div className="cart-item-pet-info" key={idx}>
                <RemoveAllButton petId={pet.petId}/>
                <div className="cart-item-pet-name-container">
                  <p>{pet.name}</p>
                </div>
                {/* <div className="item-quantity">{pet.quantity}</div> */}
                <div className="cart-item-pet-qty-container">
                  <div className="pet-qty-content">
                    <CartMinusButton petId={pet.petId}/>
                    <p>{pet.quantity}</p>
                    <CartPlusButton petId={pet.petId}/>
                  </div>
                </div>
                <div className="cart-item-pet-price-container">
                  <p>${pet.price}</p>
                </div>
              </div>
            );
          })}
          <div className="price-checkout-container">
            <div className="cart-total-price-container">
              <div className="price-header">Total Price</div>
              <div className="total-price">${totalPrice()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
