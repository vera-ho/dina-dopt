import { connect } from "react-redux";
import { requestSinglePet } from "../../actions/pet_actions";
import { fetchAllReviewsForPet } from "../../actions/review_actions";
import PetsShow from "./pet_show";

const mSTP = state => {
    return {
        pet: Object.values(state.entities.pets),
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => {
    return {
        requestSinglePet: (petId) => dispatch(requestSinglePet(petId)),
        fetchAllReviewsForPet: (petId) => dispatch(fetchAllReviewsForPet(petId)),
    }
}

export default connect(mSTP, mDTP)(PetsShow);