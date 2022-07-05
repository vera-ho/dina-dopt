import { connect } from "react-redux";
import { requestSinglePet } from "../../actions/pet_actions";
import PetsShow from "./pet_show";

const mSTP = state => {
    return {
        pet: Object.values(state.entities.pets)
    }
}

const mDTP = dispatch => {
    return {
        requestSinglePet: (petId) => dispatch(requestSinglePet(petId)),
    }
}

export default connect(mSTP, mDTP)(PetsShow);