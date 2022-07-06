import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveSinglePet } from "../../actions/pet_actions";
import { getPet } from "../../util/pet_util";
import { useLocation } from 'react-router-dom';

const PetShow = props => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pet } = props;

    useEffect( () => {
        fetchPet();
    }, []);

    const fetchPet = async () => {
        let pet = await getPet(location.pathname.replace("/pets/",""));
        dispatch(receiveSinglePet(pet));
    }

    if(!pet) {
        return null
    } else { 
        return (
            <div className="pets-show-container">
                <div className="pets-show-content">
                    <h1>{pet.name}</h1>
                    <div className="pet-show-content-left">
                        <img src="https://dina-dopt-seed.s3.amazonaws.com/compressed-full+2/bambiraptor-alex-shaffer-full.jpg" 
                            alt={pet.name} className="pet-index-item-img" />
                    </div>
                    <div className="pet-show-content-right">
                        <p>Type: {pet.petType}</p>
                        <p>Price: {pet.price} DinoCoins</p>
                        <p>Description: {pet.description}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default PetShow;