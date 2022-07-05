import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveSinglePet } from "../../actions/pet_actions";
import { getPet } from "../../util/pet_util";
import { useLocation } from 'react-router-dom';
    

    



const PetsShow = props => {
    const dispatch = useDispatch();
    const { pet } = props;
    const location = useLocation();



    useEffect( () => {
        fetchPet();
    }, []);

    const fetchPet = async () => {
        let pet = await getPet(location.pathname.replace("/pets/",""));
        dispatch(receiveSinglePet(pet));
    }

    if(!pet || !pet[0]) {
        return null
    } else { 

        console.log(pet[0].name)
    return (
        <div className="pets-show-container">
            <div className="pets-show-content">
                <h1>Dino Available</h1>
                <ul>
                    <li className="pet-show-item">
                    <img src="" alt={pet[0].name} />
                     <p>Pet Name: {pet[0].name}</p>
                     <p>Pet Type: {pet[0].petType}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
}

export default PetsShow;