import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveAllPets } from "../../actions/pet_actions";
import { getPets } from "../../util/pet_util";
import { Link } from "react-router-dom";
import AddToCartButton from '../buttons/add_to_cart_button';

const PetsIndex = props => {
    const dispatch = useDispatch();
    const { pets } = props;

    useEffect( () => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        let pets = await getPets();
        dispatch(receiveAllPets(pets));
    }

    if(!pets) return null;

    const petItems = pets.map( (pet, idx) => (
        <li className="pet-index-item" key={idx}>
            <Link to={`/pets/${pet._id}`} className="pet-index-item-link">
                <img src={pet.image_url}
                    alt={pet.name} className="pet-index-item-img" />
                <div className="pet-index-item-info">
                    <p>Pet Name: {pet.name}</p>
                    <p>Pet Type: {pet.petType}</p>
                </div>
                <div className="hidden-card-layer">
                    <AddToCartButton petId={pet._id}/>
                </div>
            </Link>
        </li>
    ));

    return (
        <div className="pets-index-container">
            <div className="pets-index-content">
                {/* <h1>Dinos Available</h1> */}
                <ul>
                    {petItems}
                </ul>
            </div>
        </div>
    )
}

export default PetsIndex;