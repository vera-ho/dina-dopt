import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveAllPets } from '../../actions/pet_actions';
import { getPets } from '../../util/pet_util';
import { Link } from 'react-router-dom';
import AddToCartButton from '../buttons/add_to_cart_button';
import { fetchCart } from '../../util/cart_api_util';
import { receiveCart } from '../../actions/cart_actions';

const PetsIndex = (props) => {
  const dispatch = useDispatch();
  const { pets, cartItems } = props;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let pets = await getPets();
    dispatch(receiveAllPets(pets));
    let cart = await fetchCart();
    console.log(cart.data);
    dispatch(receiveCart(cart.data));
  };

  // const cart = useSelector((state) => state.entities.cart);
  console.log(pets);

  if (!pets || !cartItems) return null;

  const petItems = pets.map((pet, idx) => (
    <li className="pet-index-item" key={idx}>
      <Link to={`/pets/${pet._id}`} className="pet-index-item-link">
        <img
          src={pet.image_url}
          alt={pet.name}
          className="pet-index-item-img"
        />
        <div className="pet-index-item-info">
          <p>Pet Name: {pet.name}</p>
          <p>Pet Type: {pet.petType}</p>
        </div>
        <div className="hidden-card-layer">
          <AddToCartButton pet={pet} cartItems={cartItems} />
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="pets-index-container">
      <div className="pets-index-content">
        <ul>{petItems}</ul>
      </div>
    </div>
  );
};

export default PetsIndex;
