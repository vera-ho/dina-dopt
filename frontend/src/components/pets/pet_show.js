import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveSinglePet } from "../../actions/pet_actions";
import { getPet } from "../../util/pet_util";
import { useLocation } from 'react-router-dom';

const PetShow = props => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pet, reviews } = props;

    useEffect( () => {
        fetchPet();
    }, []);

    const fetchPet = async () => {
        let pet = await getPet(location.pathname.replace("/pets/",""));
        dispatch(receiveSinglePet(pet));
    }

    const fetchPetReviews = async () => {
        let reviews = await getReviews();
    }

    const image = "https://cdn.discordapp.com/attachments/862515957842706475/994299207986974820/allosaurus-paleorex-full.jpeg";
    // const image = "https://cdn.discordapp.com/attachments/862515957842706475/994299208880369684/bambiraptor-paleorex-full.jpeg"
    // const image = 'https://cdn.discordapp.com/attachments/862515957842706475/994301131951968338/hamipterus-paleorex-full.jpeg'

    if(!pet) {
        return null
    } else { 
        return (
            <div className="pet-show-container">
                <div className="pet-show-content">
                    <div className="pet-show-content-left">
                        <div className="pet-show-image-container">
                            {/* <img src={pet.image_url} */}
                            <img src={image}
                                alt={pet.name} className="pet-show-image" />
                        </div>
                        <div className="pet-show-artist-credit">
                            <div className="pet-show-artist-inner">
                                <span>Artwork Credit: 
                                    <a href="https://www.instagram.com/paleorex/"> @paleorex</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pet-show-content-right">
                        <div className="pet-show-title">
                            <h1>{pet.name}</h1>
                        </div>
                        <div className="pet-show-details">
                            <p>Type: {pet.petType}</p>
                            <p>Price: {pet.price} DinoCoins</p>
                            <p>Description: {pet.description}</p>
                            {/* <p>Click for reviews</p> */}
                        </div>    
                    </div>
                </div>

                <div className="pet-reviews-container">

                </div>
            </div>
        )
    }
}

export default PetShow;