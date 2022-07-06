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
        console.log("pet: " + pet);
        dispatch(receiveSinglePet(pet));
    }

    if(!pet) {
        return null
    } else { 

    console.log("pet")
    console.log(pet);
    return (
        <div className="pets-show-container">
            <div className="pets-show-content">
                {/* <h1>Dino Available</h1> */}
                <ul>
                    <li className="pet-show-item">
                    <img src="https://dina-dopt-seed.s3.amazonaws.com/compressed-full+2/bambiraptor-alex-shaffer-full.jpg" 
                        alt={pet.name} className="pet-index-item-img" />
                     <p>Pet Name: {pet.name}</p>
                     <p>Pet Type: {pet.petType}</p>
                     <p>Description: {pet.description}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
}

export default PetShow;