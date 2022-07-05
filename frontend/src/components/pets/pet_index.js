import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveAllPets, receivePetErrors } from "../../actions/pet_actions";
import { getPets } from "../../util/pet_util";

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

    const petItems = pets.map( pet => (
        <li>
            <img src="" alt={pet.name} />
            <p>Pet Name: {pet.name}</p>
            <p>Pet Type: {pet.petType}</p>
        </li>
    ));

    return (
        <div className="pets-index-container">
            <div className="pets-index-content">
                <h1>Dinos Available</h1>
                <ul>
                    {petItems}
                </ul>
            </div>
        </div>
    )
}

export default PetsIndex;