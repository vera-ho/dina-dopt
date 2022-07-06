import { connect } from "react-redux";
import { requestSinglePet } from "../../actions/pet_actions";
import PetShow from "./pet_show";

const mSTP = (state, ownProps) => {
    let pets = Object.values(state.entities.pets);
    let petIdx = -1;

    pets.forEach( (pet, idx) => {
        if(pet._id === ownProps.match.params.pet_id) {
            petIdx = idx;
        }
    });

    console.log(pets[petIdx]);
    return {
        pet: pets[petIdx]
    }
    // return {
    //     pet: Object.values(state.entities.pets)
    // }
}

const mDTP = dispatch => {
    return {
        requestSinglePet: (petId) => dispatch(requestSinglePet(petId)),
    }
}

export default connect(mSTP, mDTP)(PetShow);