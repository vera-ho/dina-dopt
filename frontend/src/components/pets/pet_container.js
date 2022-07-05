import { connect } from "react-redux";
import { requestAllPets } from "../../actions/pet_actions";
import PetsIndex from "./pet_index";

const mSTP = state => {
    return {
        pets: state.pets
    }
}

const mDTP = dispatch => {
    return {
        requestAllPets: () => dispatch(requestAllPets()),
    }
}

export default connect(mSTP, mDTP)(PetsIndex);