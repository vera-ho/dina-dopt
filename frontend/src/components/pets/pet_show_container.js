import { connect } from "react-redux";
import { requestSinglePet } from "../../actions/pet_actions";
import { fetchAllReviewsForPet } from "../../actions/review_actions";
import PetsShow from "./pet_show";

const mSTP = (state, ownProps) => {
    let pets = Object.values(state.entities.pets);
    let petIdx = -1;

    pets.forEach( (pet, idx) => {
        if(pet._id === ownProps.match.params.pet_id) {
            petIdx = idx;
        }
    });

    let reviews = Object.values(state.entities.reviews);
    reviews = reviews.filter( review => review.pet === ownProps.match.params.pet_id)

    // return {
    //     pet: Object.values(state.entities.pets),
    //     reviews: Object.values(state.entities.reviews)
    // }


       return {
        pet:  pets[petIdx],
        reviews: reviews,
        user: state.session.user
    }
}

const mDTP = dispatch => {
    return {
        requestSinglePet: (petId) => dispatch(requestSinglePet(petId)),
        fetchAllReviewsForPet: (petId) => dispatch(fetchAllReviewsForPet(petId)),
    }
}

export default connect(mSTP, mDTP)(PetsShow);
