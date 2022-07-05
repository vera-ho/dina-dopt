import React, { useEffect } from "react";

const PetsIndex = props => {
    useEffect( () => {
        props.requestAllPets();
    }, []);


    const petItems = Object.values(props.pets);
    console.log(petItems);

    return (
        <div className="pets-index-container">
            <div className="pets-index-content">

            </div>
        </div>
    )
}

export default PetsIndex;