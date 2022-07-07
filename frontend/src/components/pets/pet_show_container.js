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

    let reviews = Object.values(state.entities.reviews);
    reviews = reviews.filter( review => review.pet === ownProps.match.params.pet_id)

    return {
        pet: pets[petIdx],
        reviews: reviews,
        user: state.session.user
    }
}

export default connect(mSTP)(PetShow);