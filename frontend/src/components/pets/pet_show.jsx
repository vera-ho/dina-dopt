import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receiveSinglePet } from "../../actions/pet_actions";
import { getPet } from "../../util/pet_util";
import { createReview, fetchAllReviewsForPet } from "../../util/reviews_api_util";
import { fetchAllUsers } from "../../util/user_api_util";
import { useLocation } from 'react-router-dom';
import { receiveAllReviewsForPet } from "../../actions/review_actions";
import { receiveAllUsers } from "../../actions/user_actions";
import { receiveCart } from "../../actions/cart_actions";

const PetShow = props => {
    const dispatch = useDispatch(); 
    const location = useLocation();
    const { pet, reviews, currentUser, users} = props;

    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewText, setReviewText] = useState("");

    useEffect( () => {
        fetchPet();
        fetchPetReviews();
        fetchUsers();
    }, []);

    const fetchPet = async () => {
        let pet = await getPet(location.pathname.replace("/pets/",""));
        dispatch(receiveSinglePet(pet));
    }

    const fetchPetReviews = async () => {
        let reviews = await fetchAllReviewsForPet(location.pathname.replace("/pets/",""));
        dispatch(receiveAllReviewsForPet(reviews));
    }

    const fetchUsers = async () => {
        let users = await fetchAllUsers();
        dispatch(receiveAllUsers(users));
    }

    const submitReview = e => {
        e.preventDefault();

        let review = {
            title: reviewTitle,
            text: reviewText
        }

        createReview(pet._id, review)
            .then( () => fetchPetReviews() )
    }

    const addToCart = async (e) => {
        e.preventDefault();
        let newCart = await addToCart(props.currentCart.id);
        return dispatch(receiveCart(newCart.data));
    };

    const reviewItems = reviews.map( review => {
        let reviewUser;
        reviewUser = users.filter(user => user._id === review.user)[0]

        return (
            <li className="review-item">
                <p>Name: {reviewUser ? reviewUser.name : ""}</p>
                <p>Title: {review.title}</p>
                <p>Review: {review.text}</p>
            </li>
        )
    })

    // const image = 'https://cdn.discordapp.com/attachments/862515957842706475/994301131951968338/hamipterus-paleorex-full.jpeg'

    if(!pet) {
        return null
    } else { 
        return (
            <div className="pet-show-container">
                <div className="pet-show-content">
                    <div className="pet-show-content-left">
                        <div className="pet-show-image-container">
                            <img src={pet.image_url}
                            // <img src={image}
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
                        <div className="pet-show-details-wrapper">
                            <div className="pet-show-details">
                                <h1>{pet.name}</h1>
                                <p>Type: {pet.petType}</p>
                                <p>Price: {pet.price} DinoCoins</p>
                                <p>Description: {pet.description}</p>
                                <button onClick={addToCart} className="add-to-cart-button">Add {pet.name} to cart</button>
                            </div> 
                        </div>  
                    </div>
                </div>

                <div className="pet-reviews-container">
                    <div className="pet-reviews-create">
                        <form className="add-pet-review-form">
                            <div className="add-pet-review-form-left">
                                <h1>Write a Review</h1>
                                <label>Your Name: {currentUser.name}</label>
                                <label className="pet-review-form-label">Title: 
                                    <br></br>
                                    <input type="text"
                                        value={reviewTitle} 
                                        placeholder="Review Title"
                                        onChange={ (e) => setReviewTitle(e.target.value) }
                                    />
                                </label>
                                <label className="pet-review-form-label">Review: 
                                    <br></br>
                                    <textarea value={reviewText}
                                        placeholder="Write your review here"
                                        onChange={ e => setReviewText(e.target.value) } />
                                </label>
                            </div>
                            
                            <div className="add-pet-review-form-right">
                                <button onClick={submitReview} className="submit-review-button">
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="pet-reviews-index">
                        <h1>Reviews for {pet.name}</h1>
                        <ul>
                            {reviewItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetShow;