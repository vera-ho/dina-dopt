import { connect } from "react-redux";
import PetShow from "./pet_show";

const mSTP = (state, ownProps) => {
    let pets = Object.values(state.entities.pets);
    let petIdx = -1;

    pets.forEach( (pet, idx) => {
        if(pet._id === ownProps.match.params.pet_id) {
            petIdx = idx;
        }
    });

    return {
        pet: pets[petIdx]
    }
    // return {
    //     pet: Object.values(state.entities.pets)
    // }
}

export default connect(mSTP)(PetShow);