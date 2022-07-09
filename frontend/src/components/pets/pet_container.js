import { connect } from "react-redux";
import { requestAllPets } from "../../actions/pet_actions";
import PetsIndex from "./pet_index";
import { cartItemsArray } from '../../reducers/selector';

const mSTP = state => {
    return {
        pets: Object.values(state.entities.pets),
        cartItems: cartItemsArray(state),
        
    }
}

const mDTP = dispatch => {
    return {
        requestAllPets: () => dispatch(requestAllPets())
    }
}

export default connect(mSTP, mDTP)(PetsIndex);