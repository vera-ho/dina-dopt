import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveAllPets } from "../../actions/pet_actions";
import { getPets } from "../../util/pet_util";
import { Link } from "react-router-dom";
import AddToCartButton from '../buttons/add_to_cart_button';
import { fetchCart } from "../../util/cart_api_util";
import { receiveCart } from "../../actions/cart_actions";

const PetsIndex = props => {
    const dispatch = useDispatch();
    const { pets, cartItems } = props;
    const [filter, setFilter] = useState("");

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let pets = await getPets();
        dispatch(receiveAllPets(pets));
        let cart = await fetchCart();
        dispatch(receiveCart(cart.data))
    }

    const handleCloseSidebar = (e) => {
      e.stopPropagation();
  
      const cartSidebar = document.getElementById("cart-sidebar-container")
      cartSidebar.classList.remove('active')
    }

    if(!pets || !cartItems) return null;

    let filterValue = filter.toLowerCase();
    let filteredPets = pets.filter( pet => {
        return pet.name.toLowerCase().includes(filterValue) ||
        pet.petType.toLowerCase().includes(filterValue)
    });

    const petItems = filteredPets.map( (pet, idx) => (
        <li className="pet-index-item" key={idx}>
            <Link to={`/pets/${pet._id}`} className="pet-index-item-link">
                <img src={pet.image_url}
                    alt={pet.name} className="pet-index-item-img" />
                <div className="pet-index-item-info">
                    <p>Pet Name: {pet.name}</p>
                    <p>Pet Type: {pet.petType}</p>
                </div>
                <div className="hidden-card-layer">
                    <AddToCartButton petId={pet._id} cartItems={cartItems} />
                </div>
            </Link>
        </li>
    ));

    return (
        <div className="pets-index-container" onClick={handleCloseSidebar}>
            <div className="pets-index-filter-container">
                <div className="pets-index-filter-content">
                    <div className="pets-filter-by-name-type">
                        <label className="pets-index-filter-label">
                            Filter pets by name or pet type: <br></br>
                            <input type="text"
                                value={filter}
                                placeholder="Try 'Dino' or 'Cat'"
                                onChange={ e => setFilter(e.target.value)}
                            />
                        </label>
                    </div>
                    
                </div>
            </div>
            
            <div className="pets-index-content">
                <ul>
                    {petItems}
                </ul>
            </div>
        </div>
    )
}

export default PetsIndex;
