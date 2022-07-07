import { connect } from "react-redux";
import { requestAllPets } from "../../actions/pet_actions";
import { fetchAllReviews } from "../../actions/review_actions";
import PetsIndex from "./pet_index";

const mSTP = state => {
    return {
        pets: Object.values(state.entities.pets)
    }
}

const mDTP = dispatch => {
    return {
        requestAllPets: () => dispatch(requestAllPets()),
        fetchAllReviews: () => dispatch(fetchAllReviews()),
    }
}

export default connect(mSTP, mDTP)(PetsIndex);